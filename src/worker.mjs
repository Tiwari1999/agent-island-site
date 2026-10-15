// Two jobs beyond serving the files in ./public:
//
//  1. www.agentisland.in and the workers.dev host both answer on the same
//     assets. Left alone that is three URLs for one page, so the canonical
//     host takes a permanent redirect and the preview host gets noindex.
//  2. Everything else is handed straight to the static-asset binding.

const CANONICAL = 'agentisland.in';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // www -> apex, permanently, preserving the path and query.
    if (url.hostname === `www.${CANONICAL}`) {
      url.hostname = CANONICAL;
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    // The workers.dev host is a deploy preview, not a site. Keep it out of
    // the index so it never competes with the real domain.
    if (url.hostname.endsWith('.workers.dev')) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
