import { defineCollection, z } from 'astro:content';

// NOTE (Blue Fox migration): staff / events / ministries / siteInfo
// collections are kept so the build doesn't break while church pages are
// being removed. Once /staff, /events, /ministries pages are deleted,
// these collections (and their content folders) can be removed too.

const staffCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string().startsWith('/uploads/staff/'),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    time: z.string().optional(),
    location: z.string(),
    image: z.string().startsWith('/uploads/events/'),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const toursCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.date(),
    guide: z.string(),
    tourType: z.string().optional(),
    duration: z.string(), // "3 hours", "Full day"
    // `price` is the FROM price per group in EUR (lowest tier).
    // Kept as a plain number so existing components that render
    // `tour.data.price` keep working.
    price: z.number(),
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
    draft: z.boolean().default(false),
  }),
});

const ministriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/ministries/').optional(),
    summary: z.string(),
    coordinator: z.string().optional(),
    contact: z.string().optional(),
    schedule: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default("Filip H."),
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  tours: toursCollection,
  ministries: ministriesCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};
