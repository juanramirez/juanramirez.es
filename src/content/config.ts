import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lang: z.enum(["en", "es"]).default("en"),
    translationKey: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().default("Juan Ramírez"),
    comments: z.boolean().default(true),
    image: z.string().optional(),
    featured_image: z.string().optional(),
    "featured-image": z.string().optional(),
    tags: z
      .union([z.array(z.string()), z.string()])
      .optional()
      .transform((value) => {
        if (!value) {
          return [];
        }

        if (Array.isArray(value)) {
          return value;
        }

        return value
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
      }),
    excerpt: z.string()
  })
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    lang: z.enum(["en", "es"]).default("en"),
    translationKey: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.string(),
    comments: z.boolean().default(true),
    hidden: z.boolean().default(false),
    written_date: z.string().optional(),
    published_date: z.string().optional(),
    status: z.enum(["planned", "in-development", "in-alpha", "published"]),
    category: z.enum(["technical", "literary"]).default("technical"),
    image: z.string().optional(),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    url_label: z.string().optional()
  })
});

export const collections = { blog, portfolio };
