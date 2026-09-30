# agent-island-site

Marketing site for [Agent Island](https://github.com/Tiwari1999/Agent-Island) — a macOS notch app
that surfaces every running AI coding agent.

Static site, deployed to Cloudflare Workers static assets.

## Layout

```
public/
  index.html        the whole site, no build step
  assets/panel.png  the real expanded panel
```

## Deploy

```sh
npx wrangler deploy
```

## The demo video

The hero has a placeholder where the walkthrough goes. To drop in the real capture:

1. Record the four moments in order — an agent finishing, an agent asking for input,
   clicking a row to land on its terminal tab, expanding a row to read the chat and reply.
2. Save it as `public/assets/demo.mp4` (H.264, muted, roughly 40s).
3. In `public/index.html`, replace the `<div class="slot">…</div>` block with:

```html
<video class="slot" src="/assets/demo.mp4" autoplay muted loop playsinline
       poster="/assets/panel.png"></video>
```

The marker comment above that block says the same thing.
