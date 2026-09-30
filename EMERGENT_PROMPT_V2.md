# Emergent prompt v2 — Agent Island

Paste everything below the line. This replaces the first brief.

---

Rebuild the marketing site for **Agent Island**, a macOS developer tool. A previous version was competent but generic — text on a dark background, feature cards in a uniform grid, and no sense of what the product actually looks like. This brief is about fixing that specifically.

## The single most important instruction

**The hero must contain a working recreation of the product's UI, built in HTML and CSS.** Not a screenshot, not a video, not an illustration — real DOM elements, styled to look exactly like the app, animating through a short loop.

Everything else on this page is secondary to getting that right. If you spend 80% of the effort on the hero panel, that is the correct allocation.

### What the product UI looks like

Agent Island is a dark panel that drops down from the MacBook notch. It has:

**A header strip** with usage quota and burn rate, reading like a status bar:
- `5h 25%` then dimmer `2h42m` — a time window and how much is consumed
- a flame glyph, then `79%/h` in a warning colour — the burn rate
- dimmer text `full in 57m` — the projection
- a separator, then `7d 15%` and `3d6h` — a second, longer window
- pushed to the right: a green pill reading `4 working`, a muted pill `2 blocked`, and a count `8`

**Then a list of agent rows.** Each row has, left to right:
- A small square avatar glyph, 28×28, made of a few solid blocks in a pattern — like a tiny QR fragment or a dense pixel-art mark. Below it, a four-bar equaliser in green that animates when the agent is working.
- The project name in medium weight, then a dot separator, then the session title in bold. For example: **PersonalProjects** · **openGym**
- Under that, dimmer text starting with `You:` followed by the user's last instruction, truncated with an ellipsis if long
- Under that, either a status word like `busy` in a dim colour, or a tool call like `Bash` followed by the command in monospace, e.g. `Bash  cd /tmp/crop`
- Pushed to the right on the first line: three small pills — the vendor (`Claude`), the model (`Opus 5`), the terminal (`Warp`) — then a context-window ring showing a percentage like `70%`, then a relative timestamp (`now`, `1m`), then a small square jump button with an arrow

Rows are separated by hairline dividers. The whole thing is very dark, near-black, with low-contrast borders and a green accent used only for activity and the "working" state. Type is small — this is an information-dense status panel, not a marketing card. Monospace for anything technical: commands, percentages, timestamps.

### What the hero panel must do

Loop through four states on a timer, roughly 3–4 seconds each, with smooth transitions:

1. **An agent finishes.** One row's equaliser stops, its status changes from `busy` to a completed state, and the header's `4 working` count decrements.
2. **An agent asks a question.** A card slides into the panel showing a question with two or three answer options, and a thin countdown bar that visibly depletes. This is the most important state — it is the product's best feature.
3. **A jump.** One row highlights as if hovered, the small jump button on it lights up, and a subtle indication shows focus moving to that agent's terminal tab.
4. **Expand and reply.** A row expands to reveal a conversation excerpt beneath it, with a text input at the bottom and a submit control.

Use real CSS transitions and keyframes. Respect `prefers-reduced-motion` — when set, show state 2 statically and do not animate. Add small dot indicators beneath the panel showing which of the four states is active, and let a visitor click a dot to jump to that state.

## The rest of the page

Keep these sections, but make them earn their place — the previous version's flaw was fifteen identical cards where nothing led.

**Navigation.** Product name with a small mark; anchor links; a GitHub link.

**Hero.** A small pill above the headline listing the three supported agents. Headline: *Every coding agent you run, in the notch you already have.* One supporting paragraph. Two buttons. One line of small monospace metadata (platform, language, licence). Then the live panel, which should be the visual centre of the page.

**The problem.** A short section, three or four sentences of real prose, not cards: running five to ten agents at once, the bottleneck stops being the agents and becomes the person. Which one is blocked. Which is burning quota. Which of nine identical terminal tabs that notification came from. Set this as a pull-quote or large text block — it is the emotional argument and should read differently from the feature sections.

**What it shows you.** Nine capabilities. **Do not render these as nine equal cards.** Give the three strongest a larger treatment with room to breathe, and let the remaining six be a denser secondary list. The three that lead: context-window pressure shown per session; usage quota with burn rate and projected exhaustion; distinguishing an agent that died from one that finished. The other six: every agent in one list labelled by vendor; live session detail; agents blocked on an old question staying visible without raising alarms; task progress like step 4 of 9; cost per model for today and this month; sessions on machines you SSH into.

**What it lets you do.** Six capabilities, again with hierarchy rather than a uniform grid. Lead with answering questions in the notch — multiple choice plus a free-text field, with a sliding countdown that pushes forward every time you interact, so answering never times out under you. Then: approving permission requests with a keyboard shortcut; reviewing and approving a full plan; handing a question back to the terminal with one click; notifications only when you are not already looking.

**How it works.** The credibility section. Explain that clicking a session jumps to that agent's exact terminal tab, and that the handle identifying the tab is read from the agent process's own environment rather than from any terminal's database. Then this table:

| Terminal | Handle | How it is focused | Permission |
|---|---|---|---|
| Warp | `WARP_FOCUS_URL` | open the `warp://session/…` URL | none |
| iTerm2 | `ITERM_SESSION_ID` | AppleScript selects that session | asked once |
| Terminal.app | the controlling TTY | AppleScript selects the matching tab | asked once |
| kitty | `KITTY_WINDOW_ID` | `kitty @ focus-window` | none |
| WezTerm | `WEZTERM_PANE` | `wezterm cli activate-pane` | none |

Style "none" differently from "asked once" so the difference reads at a glance. Below it, a short note: approaches that read a terminal's database and replay keystrokes cannot distinguish tabs sharing a working directory, so they land on the wrong tab in a monorepo.

**Install.** Two code blocks side by side — clone and run on the left, uninstall on the right — in monospace with a copy affordance. A note that the app is not notarized yet and needs right-click → Open on first launch. Then small pills: no screen recording, no full disk access, no accessibility permission for jumping, zero background processes when idle, fast session discovery.

**Closing call to action**, then a **footer** with licence, source and issues links, and the platform requirement.

## Visual direction

A dark developer-tool aesthetic — the visual language of a terminal, a code editor, or an observability dashboard. **Choose the palette and typography yourself**; I am not specifying colours. Pick one cohesive dark scheme with a single accent used sparingly, one clean sans for headings and prose, and one monospace for technical detail.

What I want the page to feel like: **dense and precise**, the way the product is. The previous attempt was airy and calm, which is the opposite of what a tool for running nine agents at once should feel like. Tighten the spacing, let information sit closer together, and use the monospace face to make technical detail feel technical.

Avoid: purple-to-blue gradient heroes, emoji as section markers, everything centred, oversized rounded cards, stock illustration, and any section that is just N identical boxes in a row.

## Technical requirements

- **A single self-contained `index.html`** with CSS in a `<style>` block. No build step, no framework, no bundler.
- The full palette as **CSS custom properties in one `:root` block** at the top.
- Semantic HTML. Real `<header>`, `<section>`, `<table>`, `<footer>`. Headings in order.
- Responsive via grid and flexbox with `gap`. No horizontal scrolling at any width; the panel and the table may scroll inside their own containers. At phone width the hero panel should simplify rather than shrink into illegibility.
- Accessible: visible focus states, alt text, sufficient contrast, `prefers-reduced-motion` honoured.
- Google Fonts via `<link>`, with real fallback stacks.
- No external JS libraries. The panel animation should be CSS-driven where possible; a small inline script for the state cycling and the dot controls is fine.
- Comment the hero panel markup clearly — I will be wiring it to real data later.

## What matters most

The hero panel is the deliverable. A visitor who sees the product demo itself in the first screen understands Agent Island immediately; one who reads fifteen feature cards does not. Build that panel as though it were the product, and let the rest of the page support it.
