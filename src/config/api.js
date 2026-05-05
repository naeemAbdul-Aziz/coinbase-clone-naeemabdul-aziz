/**
 * Base URL for direct fetch() calls (non-axios).
 * In production this is set via VITE_API_URL env var pointing to the Render backend.
 * In local dev it is empty so the Vite proxy handles routing.
 */
const rawApiUrl = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const API_BASE = rawApiUrl.endsWith('/api')
	? rawApiUrl.slice(0, -4)
	: rawApiUrl;
