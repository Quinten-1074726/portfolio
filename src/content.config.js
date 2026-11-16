// Content collections: the schema for each Markdown collection.
// Astro checks every file against it during the build, so missing or wrong fields give a clear error.
// (Education and work are not a collection: they live in src/data/cv.js.)
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  // Every .md file in src/content/projects is one project; the file name becomes its URL (/projects/<name>)
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one line for lists
      year: z.number().optional(), // shown in lists; newest first
      month: z.number().int().min(1).max(12).optional(), // only used to sort projects within the same year
      role: z.string().optional(),
      type: z.string().optional(), // what it is, e.g. "Web app", "Mobile app", "AI agent"
      context: z.enum(["school", "personal"]).optional(), // school project or own project
      team: z.boolean().optional(), // true = team project, false = solo (leave out when unknown)
      stack: z.array(z.string()).default([]),
      cover: image().optional(), // image next to the .md file, e.g. ./sonarpop/cover.jpg
      gallery: z.array(image()).default([]), // screenshots, e.g. [./sonarpop/1.jpg, ./sonarpop/2.jpg]
      video: z.string().optional(), // preview video in public/, e.g. /projects/sonarpop/preview.mp4
      designs: z.array(image()).default([]), // design images (e.g. exported from Figma)
      figma: z.string().optional(), // link to the Figma file or prototype
      featured: z.boolean().default(false), // shown on the home page
      order: z.number().default(99), // tie-breaker when year and month are the same (lower = higher)
      repo: z.string().optional(), // "user/repo" on GitHub
      live: z.string().optional(), // URL of the live version
      draft: z.boolean().default(false), // true = not on the site
    }),
});

export const collections = { projects };
