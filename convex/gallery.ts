import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all gallery items
export const getGalleryItems = query({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query("gallery").order("desc").collect();
    return items;
  },
});

// Get gallery items by category
export const getGalleryByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const items = await ctx.db
      .query("gallery")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("desc")
      .collect();
    return items;
  },
});

// Get featured gallery items
export const getFeaturedGallery = query({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query("gallery").collect();
    return items.filter((item) => item.featured === true);
  },
});

// Get a single gallery item by ID
export const getGalleryItem = query({
  args: { itemId: v.id("gallery") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.itemId);
  },
});

// Create a new gallery item
export const createGalleryItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    image: v.string(),
    category: v.string(),
    location: v.optional(v.string()),
    eventDate: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("gallery", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update a gallery item
export const updateGalleryItem = mutation({
  args: {
    id: v.id("gallery"),
    title: v.string(),
    description: v.string(),
    image: v.string(),
    category: v.string(),
    location: v.optional(v.string()),
    eventDate: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateData } = args;
    return await ctx.db.patch(id, {
      ...updateData,
      updatedAt: Date.now(),
    });
  },
});

// Delete a gallery item
export const deleteGalleryItem = mutation({
  args: { id: v.id("gallery") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
