import heroPortrait from '../assets/images/hero_portrait.jpg';
import aboutPortrait from '../assets/images/about_portrait.jpg';
import office1 from '../assets/images/office_1.jpg';
import office2 from '../assets/images/office_2.jpg';
import office3 from '../assets/images/office_3.jpg';
import psychotherapyHero from '../assets/images/psychotherapy_hero.jpg';
import neuropsychMaterials from '../assets/images/neuropsych_materials.jpg';
import lecturesBanner from '../assets/images/lectures_banner.jpg';
import audienceChildren from '../assets/images/audience_children.jpg';
import audienceTeens from '../assets/images/audience_teens.jpg';
import audienceAdults from '../assets/images/audience_adults.jpg';

/**
 * Standard asset imports for Vite.
 * Vite automatically bundles, hashes, and optimizes these image files,
 * guaranteeing 100% reliable loading in local dev, Vercel, Netlify, and production builds.
 */
export const DEFAULT_PHOTOS: Record<string, string> = {
  hero_portrait: heroPortrait,
  about_portrait: aboutPortrait,
  office_1: office1,
  office_2: office2,
  office_3: office3,
  psychotherapy_hero: psychotherapyHero,
  neuropsych_materials: neuropsychMaterials,
  lectures_banner: lecturesBanner,
  audience_children: audienceChildren,
  audience_teens: audienceTeens,
  audience_adults: audienceAdults,
};

export const EMBEDDED_PHOTOS: Record<string, string> = {
  ...DEFAULT_PHOTOS,
};
