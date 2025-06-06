"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

export default function Gallery() {
  const galleryItems = useQuery(api.gallery.getGalleryItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    { value: "all", label: "All" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "community", label: "Members" },
    { value: "events", label: "Events" },
  ];

  const filteredItems = galleryItems?.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <>
      <Header />
      <main>
        <section className="leadership-hero">
          <div className="hero-content">
            <h1 className="text-4xl font-bold pb-3 text-center leading-tight">
              Our Gallery
            </h1>
            <p>See our work in action through photos and stories</p>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            {/* Category Filter */}
            <div className="gallery-filters mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                      selectedCategory === category.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {!galleryItems && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                <p className="mt-4 text-gray-600">Loading gallery...</p>
              </div>
            )}

            {/* Gallery Grid */}
            {galleryItems && (
              <div className="gallery-grid">
                {filteredItems?.map((item) => (
                  <div
                    key={item._id}
                    className="gallery-item cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-item-overlay">
                      <h3>{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {galleryItems && filteredItems?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Modal for viewing full image */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <p className="text-gray-600 capitalize">
                    {selectedItem.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-96 object-contain"
                />
                <div className="mt-4">
                  <p className="text-gray-700">{selectedItem.description}</p>
                  {selectedItem.location && (
                    <p className="text-sm text-gray-500 mt-2">
                      📍 {selectedItem.location}
                    </p>
                  )}
                  {selectedItem.eventDate && (
                    <p className="text-sm text-gray-500 mt-1">
                      📅 {selectedItem.eventDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
