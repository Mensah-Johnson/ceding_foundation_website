import { api } from "./_generated/api";
import { v } from "convex/values";
import { mutation } from "./_generated/server";

// Mutation to seed initial leaders data
export const seedLeaders = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if leaders already exist
    const existingLeaders = await ctx.db.query("leaders").collect();
    if (existingLeaders.length > 0) {
      return "Leaders already exist";
    }

    const leadersData = [
      {
        name: "Frimpong Akwasi Godfred",
        position: "A founder",
        image: "/leaders/godfred.png",
        bio: "With over 10 years of experience in nonprofit management, Godfred leads our foundation with vision and compassion.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/godfred",
          twitter: "https://twitter.com/godfred",
        },
      },
      {
        name: "Johnson Mensah",
        position: "A founder",
        image: "/leaders/jay.jpg",
        bio: "Johnson is a great leader who ensures our programs run smoothly and efficiently, maximizing our impact on children's lives.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/johnson",
          facebook: "https://facebook.com/johnson",
        },
      },
      {
        name: "Nana Sarpong Kumankuma",
        position: "Patron",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
        bio: "A dedicated philanthropist who has supported our cause since its inception in 2020.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/nana",
        },
      },
      {
        name: "Anthony Boateng",
        position: "Financial Director",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
        bio: "Anthony's expertise in financial management helps us maintain transparency and maximize our resources.",
      },
      {
        name: "Roselyn Osei Serwaa",
        position: "General Secretary",
        image: "/leaders/roselyn.png",
        bio: "Roselyn plays a key leadership role in overseeing organizational strategy and operations. Her role involves coordinating teams, managing communications, and fostering collaboration to advance the organization's mission.",
      },
      {
        name: "Akwada Shem Tetteh Narh",
        position: "Public Relations Officer",
        image: "/leaders/shem.png",
        bio: "Shem is responsible for managing the organization's public image and communications. He plays a crucial role to ensure fostering positive relationships with stakeholders to enhance the organization's reputation and impact.",
      },
      {
        name: "Benedicta Adjei Preprah",
        position: "Strategic Planning Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        bio: "Benedicta leads our long-term planning initiatives and ensures alignment with our mission and values.",
      },
      {
        name: "Hannah Marfo",
        position: "Programs Coordinator",
        image: "/leaders/hannah.png",
        bio: "Hannah coordinates and manages our foundation's events and initiatives, ensuring smooth execution of our community programs.",
      },
      {
        name: "Dority Amenyo",
        position: "Youth Coordinator",
        image: "/leaders/dority.png",
        bio: "Dority works closely with young people in our programs, providing mentorship and guidance.",
      },
      {
        name: "Derrick Okyere",
        position: "Community Outreach Director",
        image: "/leaders/derrick.png",
        bio: "Derrick leads our community engagement efforts and builds relationships with local partners.",
      },
      {
        name: "Daniella Asante",
        position: "Education Coordinator",
        image: "/leaders/daniella.png",
        bio: "Daniella oversees our educational programs and ensures quality learning opportunities for all beneficiaries.",
      },
      {
        name: "Hilda Oppong",
        position: "Healthcare Coordinator",
        image: "/leaders/hilda.png",
        bio: "Hilda manages our healthcare initiatives and ensures access to medical services for our beneficiaries.",
      },
      {
        name: "Guru Mensah",
        position: "Volunteer Coordinator",
        image: "/leaders/guru.png",
        bio: "Guru manages our volunteer programs and ensures effective coordination of volunteer activities.",
      },
    ];

    const now = Date.now();
    const results = [];

    for (const leader of leadersData) {
      const id = await ctx.db.insert("leaders", {
        ...leader,
        createdAt: now,
        updatedAt: now,
      });
      results.push(id);
    }

    return `Created ${results.length} leaders`;
  },
});

// Mutation to create initial admin user
export const createInitialAdmin = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if admin already exists
    const existingAdmin = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", "cedingfoundation@gmail.com"))
      .first();

    if (existingAdmin) {
      return "Admin user already exists";
    }

    const adminId = await ctx.db.insert("users", {
      name: "Foundation Admin",
      email: "cedingfoundation@gmail.com",
      password: "admin123", // Change this in production!
    });

    return `Created admin user with ID: ${adminId}`;
  },
});

// Mutation to seed initial gallery data
export const seedGallery = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if gallery items already exist
    const existingGallery = await ctx.db.query("gallery").collect();
    if (existingGallery.length > 0) {
      return "Gallery items already exist";
    }

    const galleryData = [
      {
        title: "Community Health Fair",
        description:
          "Our annual health fair providing free health screenings, vaccinations, and wellness education to community members. Over 200 families attended this year's event.",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        category: "healthcare",
        location: "Community Center, Downtown",
        eventDate: "2024-03-15",
        featured: true,
      },
      {
        title: "Educational Workshop for Children",
        description:
          "Interactive learning session focused on STEM education for children aged 8-12. Students participated in hands-on experiments and learned about science through fun activities.",
        image:
          "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
        category: "education",
        location: "Local Elementary School",
        eventDate: "2024-02-28",
        featured: false,
      },
      {
        title: "Life Skills Training Program",
        description:
          "Comprehensive life skills training covering financial literacy, job interview preparation, and professional development for young adults in our community.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        category: "education",
        location: "Ceding Foundation Center",
        eventDate: "2024-03-22",
        featured: true,
      },
      {
        title: "Community Garden Project",
        description:
          "Local residents came together to establish a community garden that provides fresh produce for families in need while teaching sustainable farming practices.",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        category: "community",
        location: "Riverside Park",
        eventDate: "2024-04-05",
        featured: false,
      },
      {
        title: "Mobile Health Clinic",
        description:
          "Our mobile health clinic visits underserved neighborhoods to provide accessible healthcare services including check-ups, medication, and health education.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        category: "healthcare",
        location: "Various Neighborhoods",
        eventDate: "2024-03-01",
        featured: false,
      },
      {
        title: "Annual Fundraising Gala",
        description:
          "Our annual gala brought together supporters, volunteers, and community leaders to celebrate our achievements and raise funds for upcoming programs.",
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        category: "events",
        location: "Grand Ballroom Hotel",
        eventDate: "2024-01-20",
        featured: true,
      },
      {
        title: "Youth Leadership Summit",
        description:
          "Empowering young leaders through workshops on leadership skills, community organizing, and civic engagement. Over 50 youth participants from across the region.",
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
        category: "education",
        location: "University Conference Center",
        eventDate: "2024-02-14",
        featured: false,
      },
      {
        title: "Community Clean-up Day",
        description:
          "Volunteers gathered to clean up local parks and streets, removing litter and beautifying our neighborhood. A great example of community collaboration.",
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
        category: "community",
        location: "Various Community Areas",
        eventDate: "2024-04-22",
        featured: false,
      },
    ];

    const now = Date.now();
    const results = [];

    for (const item of galleryData) {
      const id = await ctx.db.insert("gallery", {
        ...item,
        createdAt: now,
        updatedAt: now,
      });
      results.push(id);
    }

    return `Created ${results.length} gallery items`;
  },
});
