// Single source of truth for business details used across the site.
// Change contact details here, not in individual pages.

export const site = {
  name: "Prague Fox Tours",
  legalName: "Prague Fox Tours - Filip Huta",
  tagline: "Prague's 20th century, told by a native, licensed guide whose family lived it.",
  url: "https://praguefoxtours.cz",
  guide: "Filip Huta",

  // TODO: switch to info@praguefoxtours.cz once that mailbox exists
  email: "info@bluefoxtours.cz",
  phone: "+420 773 537 656",
  whatsapp: "420773537656", // digits only, for wa.me links

  // Legal identification (required on Czech business websites, § 435 OZ)
  ico: "74527746",
  address: {
    street: "Korunní 2569/108g",
    district: "Vinohrady",
    postalCode: "101 00",
    city: "Praha 10",
    country: "CZ",
  },

  formspreeEndpoint: "https://formspree.io/f/xjgqqgay",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.postalCode} ${site.address.city}`;
export const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
