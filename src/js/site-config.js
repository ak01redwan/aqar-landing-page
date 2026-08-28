/**
 * Central runtime configuration for the Aqar landing page.
 *
 * This site is a standalone, statically-hosted marketing surface. Every
 * dynamic action — search results, property detail, submitting a property,
 * news, auth — hands off to the real Novixa Aqar application (Laravel).
 * APP_ORIGIN is the one thing that legitimately differs per environment
 * (local/staging/prod), so it is isolated here rather than hard-coded into
 * every template.
 *
 * IMPORTANT: replace APP_ORIGIN with the real production app host before
 * launch. Never ship "localhost" or a staging host in a public deployment
 * (see docs/DEPLOYMENT.md).
 *
 * Route paths and query parameter names below are taken directly from the
 * real application (routes/web.php, app/Livewire/PropertyList.php) — see
 * docs/CONTENT_MODEL.md for the audit this was based on. Do not invent new
 * paths here; if a route doesn't exist yet in the app, it doesn't belong on
 * the landing page.
 */
export const APP_ORIGIN = 'https://app.novixa-aqar.example';

export const APP_ROUTES = {
  properties: '/properties',
  propertyDetail: (id) => `/properties/${id}`,
  submitProperty: '/submit-property',
  propertyRequest: '/property-request',
  news: '/news',
  newsDetail: (slug) => `/news/${slug}`,
  about: '/about',
  services: '/services',
  contact: '/contact',
  terms: '/terms-and-conditions',
  privacy: '/privacy',
  login: '/login',
  register: '/register',
};

/** Query param names the real Livewire PropertyList component binds to. */
export const SEARCH_PARAMS = {
  keyword: 'search',
  status: 'status',
  propertyType: 'property_type',
};

export function appUrl(path) {
  return `${APP_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

export function propertySearchUrl({ keyword = '', status = '', propertyType = '' } = {}) {
  const params = new URLSearchParams();
  if (keyword) params.set(SEARCH_PARAMS.keyword, keyword);
  if (status) params.set(SEARCH_PARAMS.status, status);
  if (propertyType) params.set(SEARCH_PARAMS.propertyType, propertyType);
  const query = params.toString();
  return appUrl(APP_ROUTES.properties) + (query ? `?${query}` : '');
}
