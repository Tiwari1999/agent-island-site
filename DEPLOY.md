# Deploying

`npx wrangler deploy` is the normal path and needs `CLOUDFLARE_API_TOKEN` in the
environment. Without a token, this site was deployed through the Cloudflare API
directly, in three steps:

1. **Register a manifest** — `POST /accounts/{acct}/workers/scripts/agent-island-site/assets-upload-session`
   with `{manifest: {"/index.html": {hash, size}, ...}}` where `hash` is the first
   32 hex chars of the file's SHA-256. Returns a short-lived upload JWT and the
   buckets to upload.
2. **Upload each bucket** — `POST /accounts/{acct}/workers/assets/upload?base64=true`
   with `Authorization: Bearer <upload JWT>` and a multipart body whose field *name*
   is the file hash and whose value is the base64 of the file. The last bucket
   returns a completion token.
3. **Deploy** — `PUT /accounts/{acct}/workers/scripts/agent-island-site` with a
   multipart body containing `metadata` (main_module, compatibility_date,
   `assets.jwt` = completion token, and an `assets` binding) plus the worker module.

Then enable the route once: `POST /accounts/{acct}/workers/scripts/agent-island-site/subdomain`
with `{enabled: true}`.

Live at https://agent-island-site.tiwari1999.workers.dev
