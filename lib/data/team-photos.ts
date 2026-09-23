import { ronyPhoto } from "@/lib/data/rony-photo";
import { rafayatPhoto } from "@/lib/data/rafayat-photo";
import { tusarPhoto } from "@/lib/data/tusar-photo";

/**
 * Optimised 4:5 WebP portraits, inlined so the site never depends on an
 * external image host. Swap these for files under public/images/team/ if you
 * later want them served as separate cacheable assets.
 */
export const teamPhotos = {
  rony: ronyPhoto,
  rafayat: rafayatPhoto,
  tusar: tusarPhoto,
} as const;
