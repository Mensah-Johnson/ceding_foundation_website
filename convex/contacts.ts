import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all contact submissions
export const getContacts = query({
  args: {},
  handler: async (ctx) => {
    const contacts = await ctx.db.query("contacts").order("desc").collect();
    return contacts;
  },
});

// Get contacts by status
export const getContactsByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    const contacts = await ctx.db
      .query("contacts")
      .withIndex("by_status", (q) => q.eq("status", args.status))
      .order("desc")
      .collect();
    return contacts;
  },
});

// Create a new contact submission
export const createContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("contacts", {
      ...args,
      status: "new",
      createdAt: now,
    });
  },
});

// Update contact status
export const updateContactStatus = mutation({
  args: {
    id: v.id("contacts"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: args.status,
    });
  },
});

// Delete a contact submission
export const deleteContact = mutation({
  args: { id: v.id("contacts") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
