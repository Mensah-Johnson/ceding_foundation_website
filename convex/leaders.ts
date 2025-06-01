import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all leaders
export const getLeaders = query({
  args: {},
  handler: async (ctx) => {
    const leaders = await ctx.db.query("leaders").collect();
    return leaders;
  },
});

// Get a single leader by ID
export const getLeader = query({
  args: { leaderId: v.id("leaders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.leaderId);
  },
});

// Create a new leader
export const createLeader = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("leaders", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update a leader
export const updateLeader = mutation({
  args: {
    id: v.id("leaders"),
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
  },
  handler: async (ctx, args) => {
    const { id, ...updateData } = args;
    return await ctx.db.patch(id, {
      ...updateData,
      updatedAt: Date.now(),
    });
  },
});

// Delete a leader
export const deleteLeader = mutation({
  args: { id: v.id("leaders") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
}); 