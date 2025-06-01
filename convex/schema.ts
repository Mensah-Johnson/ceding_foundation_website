import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(), // In production, this should be hashed
  }).index("by_email", ["email"]),

  leaders: defineTable({
    name: v.string(),
    position: v.string(),
    image: v.string(),
    bio: v.string(),
    socialLinks: v.optional(
      v.object({
        facebook: v.optional(v.string()),
        twitter: v.optional(v.string()),
        instagram: v.optional(v.string()),
        linkedin: v.optional(v.string()),
      })
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  gallery: defineTable({
    title: v.string(),
    description: v.string(),
    image: v.string(),
    category: v.string(), // e.g., "education", "healthcare", "community", "events"
    location: v.optional(v.string()),
    eventDate: v.optional(v.string()),
    featured: v.optional(v.boolean()), // for highlighting important images
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_category", ["category"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    status: v.string(), // "new", "read", "replied"
    createdAt: v.number(),
  }).index("by_status", ["status"]),
});
