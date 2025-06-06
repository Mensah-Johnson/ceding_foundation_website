"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import ImageUpload from "@/components/ImageUpload";

interface Leader {
  _id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt: number;
  updatedAt: number;
}

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  eventDate?: string;
  featured?: boolean;
  createdAt: number;
  updatedAt: number;
}

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("leaders");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingLeader, setEditingLeader] = useState<Leader | null>(null);
  const [editingGalleryItem, setEditingGalleryItem] =
    useState<GalleryItem | null>(null);

  // Form state for leaders
  const [leaderFormData, setLeaderFormData] = useState({
    name: "",
    position: "",
    image: "",
    bio: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  });

  // Form state for gallery
  const [galleryFormData, setGalleryFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "education",
    location: "",
    eventDate: "",
    featured: false,
  });

  // Convex queries and mutations for leaders
  const leaders = useQuery(api.leaders.getLeaders);
  const createLeader = useMutation(api.leaders.createLeader);
  const updateLeader = useMutation(api.leaders.updateLeader);
  const deleteLeader = useMutation(api.leaders.deleteLeader);

  // Convex queries and mutations for gallery
  const galleryItems = useQuery(api.gallery.getGalleryItems);
  const createGalleryItem = useMutation(api.gallery.createGalleryItem);
  const updateGalleryItem = useMutation(api.gallery.updateGalleryItem);
  const deleteGalleryItem = useMutation(api.gallery.deleteGalleryItem);

  const resetLeaderForm = () => {
    setLeaderFormData({
      name: "",
      position: "",
      image: "",
      bio: "",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
    });
    setEditingLeader(null);
    setShowAddForm(false);
  };

  const resetGalleryForm = () => {
    setGalleryFormData({
      title: "",
      description: "",
      image: "",
      category: "education",
      location: "",
      eventDate: "",
      featured: false,
    });
    setEditingGalleryItem(null);
    setShowAddForm(false);
  };

  const handleLeaderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingLeader) {
        // Update existing leader
        await updateLeader({
          id: editingLeader._id as any,
          ...leaderFormData,
        });
      } else {
        // Create new leader
        await createLeader(leaderFormData);
      }
      resetLeaderForm();
    } catch (error) {
      console.error("Error saving leader:", error);
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingGalleryItem) {
        // Update existing gallery item
        await updateGalleryItem({
          id: editingGalleryItem._id as any,
          ...galleryFormData,
        });
      } else {
        // Create new gallery item
        await createGalleryItem(galleryFormData);
      }
      resetGalleryForm();
    } catch (error) {
      console.error("Error saving gallery item:", error);
    }
  };

  const handleEditLeader = (leader: Leader) => {
    setLeaderFormData({
      name: leader.name,
      position: leader.position,
      image: leader.image,
      bio: leader.bio,
      socialLinks: {
        facebook: leader.socialLinks?.facebook || "",
        twitter: leader.socialLinks?.twitter || "",
        instagram: leader.socialLinks?.instagram || "",
        linkedin: leader.socialLinks?.linkedin || "",
      },
    });
    setEditingLeader(leader);
    setActiveTab("leaders");
    setShowAddForm(true);
  };

  const handleEditGalleryItem = (item: GalleryItem) => {
    setGalleryFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      category: item.category,
      location: item.location || "",
      eventDate: item.eventDate || "",
      featured: item.featured || false,
    });
    setEditingGalleryItem(item);
    setActiveTab("gallery");
    setShowAddForm(true);
  };

  const handleDeleteLeader = async (leaderId: string) => {
    if (confirm("Are you sure you want to delete this leader?")) {
      try {
        await deleteLeader({ id: leaderId as any });
      } catch (error) {
        console.error("Error deleting leader:", error);
      }
    }
  };

  const handleDeleteGalleryItem = async (itemId: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      try {
        await deleteGalleryItem({ id: itemId as any });
      } catch (error) {
        console.error("Error deleting gallery item:", error);
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">Welcome, {user?.name}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    if (activeTab === "leaders") {
                      resetLeaderForm();
                    } else {
                      resetGalleryForm();
                    }
                    setShowAddForm(true);
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  {activeTab === "leaders" ? "Add Leader" : "Add Gallery Item"}
                </button>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("leaders")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "leaders"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Leadership Team
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "gallery"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Gallery Management
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Add/Edit Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {activeTab === "leaders"
                      ? editingLeader
                        ? "Edit Leader"
                        : "Add New Leader"
                      : editingGalleryItem
                        ? "Edit Gallery Item"
                        : "Add New Gallery Item"}
                  </h3>

                  {/* Leader Form */}
                  {activeTab === "leaders" && (
                    <form onSubmit={handleLeaderSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter leader's name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          value={leaderFormData.name}
                          onChange={(e) =>
                            setLeaderFormData({
                              ...leaderFormData,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Position
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter position/title"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          value={leaderFormData.position}
                          onChange={(e) =>
                            setLeaderFormData({
                              ...leaderFormData,
                              position: e.target.value,
                            })
                          }
                        />
                      </div>
                      <ImageUpload
                        label="Leader Image"
                        currentImage={leaderFormData.image}
                        onUploadComplete={(url) =>
                          setLeaderFormData({ ...leaderFormData, image: url })
                        }
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Bio
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Enter leader's bio and background"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          value={leaderFormData.bio}
                          onChange={(e) =>
                            setLeaderFormData({
                              ...leaderFormData,
                              bio: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Facebook
                          </label>
                          <input
                            type="url"
                            placeholder="https://facebook.com/username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={leaderFormData.socialLinks.facebook}
                            onChange={(e) =>
                              setLeaderFormData({
                                ...leaderFormData,
                                socialLinks: {
                                  ...leaderFormData.socialLinks,
                                  facebook: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Twitter
                          </label>
                          <input
                            type="url"
                            placeholder="https://twitter.com/username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={leaderFormData.socialLinks.twitter}
                            onChange={(e) =>
                              setLeaderFormData({
                                ...leaderFormData,
                                socialLinks: {
                                  ...leaderFormData.socialLinks,
                                  twitter: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Instagram
                          </label>
                          <input
                            type="url"
                            placeholder="https://instagram.com/username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={leaderFormData.socialLinks.instagram}
                            onChange={(e) =>
                              setLeaderFormData({
                                ...leaderFormData,
                                socialLinks: {
                                  ...leaderFormData.socialLinks,
                                  instagram: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            LinkedIn
                          </label>
                          <input
                            type="url"
                            placeholder="https://linkedin.com/in/username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={leaderFormData.socialLinks.linkedin}
                            onChange={(e) =>
                              setLeaderFormData({
                                ...leaderFormData,
                                socialLinks: {
                                  ...leaderFormData.socialLinks,
                                  linkedin: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3 pt-4">
                        <button
                          type="button"
                          onClick={resetLeaderForm}
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={
                            !leaderFormData.name ||
                            !leaderFormData.position ||
                            !leaderFormData.image ||
                            !leaderFormData.bio
                          }
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {editingLeader ? "Update" : "Create"}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Gallery Form */}
                  {activeTab === "gallery" && (
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter image title"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          value={galleryFormData.title}
                          onChange={(e) =>
                            setGalleryFormData({
                              ...galleryFormData,
                              title: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Enter description of the image/event"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          value={galleryFormData.description}
                          onChange={(e) =>
                            setGalleryFormData({
                              ...galleryFormData,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>
                      <ImageUpload
                        label="Gallery Image"
                        currentImage={galleryFormData.image}
                        onUploadComplete={(url) =>
                          setGalleryFormData({ ...galleryFormData, image: url })
                        }
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Category
                          </label>
                          <select
                            required
                            title="Select category"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={galleryFormData.category}
                            onChange={(e) =>
                              setGalleryFormData({
                                ...galleryFormData,
                                category: e.target.value,
                              })
                            }
                          >
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="community">Member</option>
                            <option value="events">Events</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Location (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Enter location"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={galleryFormData.location}
                            onChange={(e) =>
                              setGalleryFormData({
                                ...galleryFormData,
                                location: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Event Date (Optional)
                          </label>
                          <input
                            type="date"
                            title="Select event date"
                            placeholder="Select date"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={galleryFormData.eventDate}
                            onChange={(e) =>
                              setGalleryFormData({
                                ...galleryFormData,
                                eventDate: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="flex items-center pt-6">
                          <input
                            type="checkbox"
                            id="featured"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={galleryFormData.featured}
                            onChange={(e) =>
                              setGalleryFormData({
                                ...galleryFormData,
                                featured: e.target.checked,
                              })
                            }
                          />
                          <label
                            htmlFor="featured"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            Featured Image
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3 pt-4">
                        <button
                          type="button"
                          onClick={resetGalleryForm}
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={
                            !galleryFormData.title ||
                            !galleryFormData.description ||
                            !galleryFormData.image
                          }
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {editingGalleryItem ? "Update" : "Create"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Leaders List */}
          {activeTab === "leaders" && (
            <div className="px-4 py-6 sm:px-0">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leaders?.map((leader) => (
                  <div
                    key={leader._id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-indigo-600 mb-2">
                        {leader.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                      <div className="flex justify-between">
                        <button
                          onClick={() => handleEditLeader(leader)}
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteLeader(leader._id)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery List */}
          {activeTab === "gallery" && (
            <div className="px-4 py-6 sm:px-0">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Gallery Management
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems?.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        {item.featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-indigo-600 mb-2 capitalize">
                        {item.category}
                      </p>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      {item.location && (
                        <p className="text-xs text-gray-500 mb-1">
                          📍 {item.location}
                        </p>
                      )}
                      {item.eventDate && (
                        <p className="text-xs text-gray-500 mb-3">
                          📅 {item.eventDate}
                        </p>
                      )}
                      <div className="flex justify-between">
                        <button
                          onClick={() => handleEditGalleryItem(item)}
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteGalleryItem(item._id)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {galleryItems?.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No gallery items yet. Add your first image!
                  </p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
