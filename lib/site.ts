export const SITE_URL = "https://binii.dev";
export const SITE_NAME = "Binyam Portfolio";
export const AUTHOR_NAME = "Binyam Techan";

/** Stable @id values so JSON-LD entities can reference each other across pages. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Root-level file-based OG image (app/opengraph-image.png). */
export const OG_IMAGE = "/opengraph-image.png";
export const OG_IMAGE_ALT = "Hi, I'm Binyam, a web developer.";

/** Per-post share images live in /public/og and are always exactly this size. */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const postPath = (slug: string): string => `/blogs/${slug}`;
