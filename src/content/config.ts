import { defineCollection } from 'astro:content';

const asomi = defineCollection({
  type: 'content',
  schema: ({ z }) => ({
    title: z.string(),
    industry: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  asomi,
};
