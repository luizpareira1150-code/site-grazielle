// Arquivo de persistência direta de fotos no código-fonte.
// As fotos configuradas ou atualizadas aqui são empacotadas no bundle final (ZIP, GitHub, Vercel).

export const DEFAULT_PHOTOS: Record<string, string> = {
  hero_portrait: "/images/hero_portrait.png",
  about_portrait: "/images/about_portrait.png",
  office_1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  office_2: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  office_3: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  psychotherapy_hero: "/images/psychotherapy_hero.png",
  neuropsych_materials: "/images/neuropsych_materials.png",
  lectures_banner: "/images/lectures_banner.png",
  audience_teens: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  audience_adults: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
};

export const EMBEDDED_PHOTOS: Record<string, string> = {
  hero_portrait: "/images/hero_portrait.png",
  about_portrait: "/images/about_portrait.png",
  psychotherapy_hero: "/images/psychotherapy_hero.png",
  lectures_banner: "/images/lectures_banner.png",
  neuropsych_materials: "/images/neuropsych_materials.png"
};
