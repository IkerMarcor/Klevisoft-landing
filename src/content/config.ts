import { z, defineCollection } from "astro:content";

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
    ceo: defineCollection({
        type: "data",
        schema:({image}: { image: any }) => z.object({
            name: z.string(),
            role: z.string(),
            picture: image(),
        }),
    }),
    ingenieros: defineCollection({
        type: "data",
        schema:({image}: { image: any }) => z.object({
            name: z.string(),
            role: z.string(),
            picture: image(),
        }),
    }),
};
