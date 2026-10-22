import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['Journal article', 'Conference paper', 'Book chapter', 'Other']),
    doi: z.url().optional(),
    url: z.url().optional(),
    pdf: z.url().optional(),
    code: z.url().optional(),
    project: z.string().optional(),
    area: z.string().optional(),
    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
  }),
});

export const collections = { publications };
