import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
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
    description: z.string(),
    status: z.enum(["in-development", "published"]),
    image: z.string().optional(),
    stack: z.array(z.string()).default([]),
    url: z.string().url().optional()
  })
});

export const collections = { blog, portfolio };
