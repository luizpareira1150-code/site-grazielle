// As fotos de produção são arquivos estáticos em public/images.
// Não embuta Base64 aqui: isso evita arquivos corrompidos e mantém o bundle leve.

export const DEFAULT_PHOTOS: Record<string, string> = {};

export const EMBEDDED_PHOTOS: Record<string, string> = {};
