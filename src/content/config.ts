import { defineCollection, z } from 'astro:content';

const toursCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // Full, search-friendly title (<title> and structured data)
    shortTitle: z.string().optional(), // Shorter title for page headings and cards
    slug: z.string().optional(),
    date: z.date(),
    guide: z.string(),
    tourType: z.string().optional(),
    duration: z.string(), // "3 hours", "Full day"
    // `price` is the FROM price per group in EUR (lowest tier).
    // Kept as a plain number so existing components that render
    // `tour.data.price` keep working.
    price: z.number(),
    // Optional note shown after the price, e.g. "+ admission and fares at cost"
    priceNote: z.string().optional(),
    // Per-group pricing tiers (private tour model)
    pricingTiers: z
      .array(
        z.object({
          label: z.string(), // e.g. "1–2 people"
          price: z.number(), // EUR per group
        })
      )
      .optional(),
    priceIncludes: z.array(z.string()).optional(),
    meetingPoint: z.string().optional(),
    videoUrl: z.string().url().optional(),
    image: z.string().startsWith('/uploads/tours/').optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Display order on the site, lowest first
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  tours: toursCollection,
};
