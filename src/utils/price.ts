import type { CollectionEntry } from "astro:content";

type TourData = CollectionEntry<"tours">["data"];

// Lowest price per group: the cheapest tier, or the flat `price`.
export const fromPrice = (data: TourData) =>
  data.pricingTiers?.length ? Math.min(...data.pricingTiers.map((t) => t.price)) : data.price;

// "€200 per group (1–6 people)" for a single tier, "From €150 per group" for several.
export const priceLabel = (data: TourData) => {
  const tiers = data.pricingTiers ?? [];
  const base =
    tiers.length === 1
      ? `€${tiers[0].price} per group (${tiers[0].label})`
      : `From €${fromPrice(data)} per group`;
  return data.priceNote ? `${base} ${data.priceNote}` : base;
};

// Tours in display order (frontmatter `order`, then newest first)
export const byOrder = (a: CollectionEntry<"tours">, b: CollectionEntry<"tours">) =>
  a.data.order - b.data.order || b.data.date.getTime() - a.data.date.getTime();
