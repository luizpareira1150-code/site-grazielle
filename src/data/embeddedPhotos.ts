/**
 * Static image mappings pointing to /public/images
 * Vite copies the public/ folder directly to dist/ during build,
 * guaranteeing fast, lightweight, and 100% reliable image loading on Vercel and any production server.
 */

export const DEFAULT_PHOTOS: Record<string, string> = {
  "hero_portrait": "/images/hero_portrait.jpg",
  "about_portrait": "/images/about_portrait.jpg",
  "office_1": "/images/office_1.jpg",
  "office_2": "/images/office_2.jpg",
  "office_3": "/images/office_3.jpg",
  "psychotherapy_hero": "/images/psychotherapy_hero.jpg",
  "neuropsych_materials": "/images/neuropsych_materials.jpg",
  "lectures_banner": "/images/lectures_banner.jpg",
  "audience_children": "/images/audience_children.jpg",
  "audience_teens": "/images/audience_teens.jpg",
  "audience_adults": "/images/audience_adults.jpg",
};

export const EMBEDDED_PHOTOS: Record<string, string> = {
  ...DEFAULT_PHOTOS,
};
