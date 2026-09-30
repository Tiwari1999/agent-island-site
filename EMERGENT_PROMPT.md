# Emergent prompt — Agent Island marketing site

Paste everything below the line into Emergent.

---

Build a marketing website for a macOS developer tool called **Agent Island**.

## What the product is

Agent Island turns the MacBook notch into a live dashboard for AI coding agents. Developers who run five to ten coding agents at once (Claude Code, Codex, Cursor — each in a different terminal tab) lose track of which one is blocked, which one is asking a question, which one is burning through its usage quota, and which of nine identical-looking terminal tabs a notification came from. Agent Island shows all of them in one panel that lives in the notch, and lets you act on them without switching windows.

The one-line pitch: **every coding agent you run, in the notch you already have.**

## Who it is for

Professional software engineers who work with multiple AI coding agents simultaneously. They are technical, skeptical of marketing language, and care about latency, permissions, and whether a tool phones home. The site should feel like it was made by engineers for engineers — precise, quiet, and confident. No hype, no exclamation marks, no "revolutionize your workflow."

## Visual direction

A **dark, developer-tool aesthetic** — the kind of look used by modern infrastructure and developer-platform sites. Think of the visual language of a terminal, a code editor, or an observability dashboard: deep dark background, restrained accent color used sparingly, monospace type for anything technical, generous whitespace, sharp alignment.

Please choose the exact palette yourself. I am not specifying colors — pick a cohesive dark scheme with one accent that works well against it, and use the accent sparingly rather than everywhere. Pick the typography too: one clean sans-serif for headings and body, one monospace face for code, file paths, keyboard shortcuts, and technical labels.

Qualities I want:
- Dark background throughout, not a light site with a dark toggle.
- Large, tightly-tracked headline with a real type scale beneath it.
- Subtle depth — a soft ambient glow or gradient behind the hero is welcome, but one, not many.
- Cards and sections with thin borders rather than heavy shadows.
- Monospace for technical detail so it visually separates from prose.
- Tasteful motion only: gentle hover states, nothing that animates on scroll into view.
- Must look correct at 400px wide as well as on a large display.

Avoid: purple-to-blue gradient heroes, emoji as section markers, everything centered, giant rounded cards, stock illustration.

## Sections to build

**1. Navigation** — product name with a small mark on the left; anchor links (Demo, Features, How it works, Install) and a GitHub link on the right. Collapses cleanly on mobile.

**2. Hero** — a small status-style pill above the headline listing the three supported agents. Headline, one supporting paragraph, two buttons (primary: get it; secondary: install instructions), and a single line of small monospace metadata beneath (platform, language, licence).

**3. Demo section** — a framed video player area with a fake browser/window chrome bar above it. **Leave the video area as a clearly-marked placeholder** — I will drop in a real screen capture later, so make it a `<video>` element with a poster image, or a container that is trivially swappable, and comment it clearly in the code. Below the frame, a row of four small numbered cards describing what the walkthrough shows, in order:
   1. An agent finishes its run
   2. An agent needs input — a permission request or a question appears
   3. Clicking a row jumps to that agent's exact terminal tab
   4. Expanding a row shows the full conversation and lets you reply inline

**4. Features — "See"** — a grid of nine cards. Each has a short title and one or two sentences:
   - Every agent in one list, labelled by vendor
   - Live session detail: title, project, model, terminal, current tool call
   - Context-window pressure shown per session, so you compact before hitting the limit
   - Usage quota and burn rate, with projected exhaustion time
   - Distinguishes an agent that died from one that finished
   - Agents blocked on an old question stay visible without raising alarms
   - Task progress, e.g. step 4 of 9, with the current step named
   - Cost breakdown per model, today and this month
   - Sessions on remote machines you SSH into, shown in the same panel

**5. Features — "Act"** — a grid of six cards:
   - Approve permission requests from the notch with a keyboard shortcut
   - Answer multiple-choice questions in place, including a free-text field
   - Review and approve a full plan without opening the terminal
   - A sliding countdown before an unanswered question returns to the terminal; interacting pushes it forward
   - Hand a question back to the terminal with one click if you would rather answer there
   - Notifications only when you are not already looking at the panel

**6. A product screenshot section** — a single wide screenshot in a framed container with a one-line monospace caption beneath. Use a placeholder image sized 844×396 and comment it clearly so I can swap in the real one.

**7. How it works** — the most technical section, and the one that earns credibility. Explain that clicking a session jumps to that agent's exact terminal tab, and that the handle identifying the tab is read from the agent process's own environment rather than from any terminal's database. Then a table with four columns — Terminal, Handle, How it is focused, Permission required — and five rows:

   | Terminal | Handle | How it is focused | Permission |
   |---|---|---|---|
   | Warp | `WARP_FOCUS_URL` | open the `warp://session/…` URL | none |
   | iTerm2 | `ITERM_SESSION_ID` | AppleScript selects that session | asked once |
   | Terminal.app | the controlling TTY | AppleScript selects the matching tab | asked once |
   | kitty | `KITTY_WINDOW_ID` | `kitty @ focus-window` | none |
   | WezTerm | `WEZTERM_PANE` | `wezterm cli activate-pane` | none |

   Style the "none" permission values differently from "asked once" so the difference is visible at a glance. Below the table, a short highlighted note explaining that approaches which read a terminal's database and replay keystrokes cannot distinguish tabs that share a working directory, so they land on the wrong tab in a monorepo.

**8. Install** — two side-by-side code blocks with syntax-appropriate styling, monospace, and a copy affordance. Left: three lines to clone and run an install script. Right: two lines to uninstall. Use realistic placeholder commands. Below them, a highlighted note about the app not being notarized yet and needing right-click → Open on first launch. Then a row of small pill-shaped badges listing privacy and performance claims: no screen recording, no full disk access, no accessibility permission for jumping, zero background processes when idle, fast session discovery.

**9. Closing call to action** — a bordered panel, slightly lifted from the background, with a short headline, one line of supporting text, and two buttons.

**10. Footer** — licence, source and issues links, and the platform requirement on the right.

## Technical requirements

- **A single self-contained `index.html`** with the CSS in a `<style>` block in the head. No build step, no framework, no bundler. I need to read and edit this by hand.
- Define the entire palette as **CSS custom properties in one `:root` block at the top**, so every color can be changed in one place.
- Semantic HTML: real `<header>`, `<section>`, `<table>`, `<footer>`. Headings in order.
- Responsive with CSS grid and flexbox using `gap`. Must not scroll horizontally at any width. The table may scroll inside its own container.
- Accessible: visible keyboard focus states, alt text on images, sufficient contrast, and respect `prefers-reduced-motion`.
- Use Google Fonts via a `<link>` tag, with a real fallback stack on every font family.
- No external JavaScript libraries. If any JS is needed, inline a few lines.
- Comment the placeholder regions clearly — the video area and the screenshot — so they are obvious to find and replace.

## What matters most

The design is the deliverable. I will be rebuilding the functionality myself on top of this markup, so the value is in the visual system: the palette, the type scale, the spacing rhythm, the component styling, and how the sections are composed. Make those decisions deliberately and make them consistent, and keep the HTML clean enough to extend.
