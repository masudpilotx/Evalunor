import { ronyPhoto } from "@/lib/data/rony-photo";
// NOTE: the two modules below were generated from mislabelled source files.
// rafayat-photo.ts holds Atick Shahariar Tusar's portrait and tusar-photo.ts
// holds Rafayat Hossain's, so they are aliased here to the right people.
// Keep these aliases if you ever regenerate the payloads.
import { rafayatPhoto as atickPortrait } from "@/lib/data/rafayat-photo";
import { tusarPhoto as rafayatPortrait } from "@/lib/data/tusar-photo";

/**
 * Optimised 4:5 WebP portraits, inlined so the site never depends on an
 * external image host. Swap these for files under public/images/team/ if you
 * later want them served as separate cacheable assets.
 */
export const teamPhotos = {
  rony: ronyPhoto,
  rafayat: rafayatPortrait,
  tusar: atickPortrait,
} as const;
