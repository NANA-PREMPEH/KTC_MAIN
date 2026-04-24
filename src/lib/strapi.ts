
interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

/**
 * Fetch data from the Strapi API.
 * Returns the parsed JSON response, or `null` if the request fails
 * (network error, Strapi not running, 404 permissions not set, etc.).
 * Callers should check for null and fall back to static/hardcoded data.
 */
export async function fetchAPI(
  path: string,
  urlParamsObject: Record<string, string> = {},
  options: RequestInit = {}
): Promise<any | null> {
  // Merge default and user options
  const mergedOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.warn(
        `[Strapi] ${response.status} ${response.statusText} — GET ${requestUrl}\n` +
        `  Hint: Make sure Strapi public API permissions are enabled in the admin panel\n` +
        `  (Settings → Users & Permissions → Roles → Public → enable find/findOne).`
      );
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Network-level failure (Strapi not running, DNS error, etc.)
    console.warn(
      `[Strapi] Network error fetching ${requestUrl}\n` +
      `  Is Strapi running on ${getStrapiURL()}?\n` +
      `  Error: ${error instanceof Error ? error.message : error}`
    );
    return null;
  }
}

