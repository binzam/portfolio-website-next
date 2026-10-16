export const SITE_URL = "https://binii.dev";
export const SITE_NAME = "Binyam Portfolio";
export const AUTHOR_NAME = "Binyam Techan";

/** Stable @id values so JSON-LD entities can reference each other across pages. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Root-level file-based OG image (app/opengraph-image.png). */
export const OG_IMAGE = "/opengraph-image.png";

export const postPath = (slug: string): string => `/blogs/${slug}`;
