export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getLocaleFromPathname = (pathname: string): Locale => {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "es" ? "es" : defaultLocale;
};

export const withoutLocalePrefix = (pathname: string) => {
  const cleanPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const path = cleanPathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return path.endsWith("/") || path.includes(".") ? path : `${path}/`;
};

export const localizedPath = (pathname: string, locale: Locale) => {
  const path = withoutLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return path;
  }

  return path === "/" ? "/es/" : `/es${path}`;
};

export const switchLocalePath = (pathname: string, targetLocale: Locale) =>
  localizedPath(pathname, targetLocale);

export const getLocalizedContentSlug = (slug: string, locale: Locale) => {
  const prefix = `${locale}/`;
  return slug.startsWith(prefix) ? slug.slice(prefix.length) : slug;
};

export const toTagSlug = (tag: string) =>
  tag
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
