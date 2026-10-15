# Agent Island — launch posts

Everything below is ready to paste. Nothing here is auto-posted: each one needs
your account, and most of these communities ban submissions that look automated.

Facts used in the copy, all verified against the repo on 2026-10-15:

| | |
|---|---|
| Agents | Claude Code, Codex, Cursor, Gemini CLI, OpenCode |
| Terminals it can jump to | 6 (tmux, Warp, iTerm2, Terminal.app, kitty, WezTerm) |
| Requires | macOS 14+ |
| Licence | MIT |
| Cost | free |
| Install | `brew install --cask agent-island`, or build from source |

**Do not claim** a notarised build, a signed DMG, or auto-update yet. See
"Before you post" at the bottom.

---

## 1. Hacker News — Show HN

The highest-value post on this list, and the one that most rewards being plain.
Post Tue–Thu, 9–11am ET. Then stay in the thread for two hours and answer.

**Title** (HN strips anything that reads like marketing):

```
Show HN: Agent Island – see every coding agent you run in the MacBook notch
```

**First comment** (post this yourself, immediately after submitting):

```
I run five or six coding agents at once — Claude Code in a few terminals, Codex,
sometimes Cursor — and I kept losing track of which one was waiting on me. The
notification says "permission needed" and I'd go hunting through nine identical
terminal tabs for it.

Agent Island puts them all in the notch. Each row is one session: what it's
working on, which model, which terminal, how full its context window is, and what
it's spending. If one is blocked on a question, you answer it from the notch. If
you want the terminal, clicking the row focuses that agent's exact tab — not just
the app, the tab.

Some details that might interest people here:

- No daemon and no wrapper. It reads the session files the agents already write,
  so there's nothing to configure per project. A refresh spawns zero
  subprocesses, and the test suite enforces that.
- The jump uses the terminal handle from the agent process's own environment, not
  a terminal session database. Session stores can't tell apart two tabs in the
  same working directory, which is exactly the monorepo case.
- Swift/AppKit, no Electron. macOS 14+.

It's MIT and free: https://github.com/Tiwari1999/Agent-Island

One honest caveat: the build isn't notarised yet, so macOS will warn you on first
open and you'll need to right-click → Open. I'd rather say that up front than
have you hit it cold.

Happy to answer anything.
```

---

## 2. Reddit

Each subreddit has its own tone. Posting the same text to all of them is the
fastest way to get filtered as spam — space them a day or two apart.

### r/macapps — the best fit on the whole list

**Title:** `[Free] Agent Island — every AI coding agent you run, in the MacBook notch`

```
If you run more than a couple of coding agents at once, you've had the moment
where a notification fires and you can't tell which terminal it came from.

Agent Island hangs a panel off the notch with one row per session: Claude Code,
Codex, Cursor, Gemini CLI and OpenCode. Each row shows the task, the model, the
terminal, the context window and the spend. Answer a blocked agent's question
from the notch, or click the row to land in its exact terminal tab.

Free, MIT, macOS 14+, Swift/AppKit — no Electron.

    brew install --cask agent-island

https://agentisland.in

Heads up: it isn't notarised yet, so first open needs right-click → Open. Working
on that.
```

### r/ClaudeAI and r/ChatGPTCoding

Lead with the agent, not the app.

**Title:** `I kept losing track of which Claude Code session was blocked, so I put them all in the notch`

```
Running several Claude Code sessions at once, my problem was never the agents —
it was me. One would stop and wait for a permission or a question, and I wouldn't
notice for ten minutes because it looked like every other terminal tab.

So the notch now shows all of them. One row per session: what it's doing, context
window, spend, and whether it's waiting on you. Permission prompts and questions
get answered right there, and clicking a row jumps to that session's terminal tab.

Also reads Codex, Cursor, Gemini CLI and OpenCode, if you mix.

Free and MIT: https://agentisland.in
```

### r/SideProject and r/IndieHackers

These two want the story, not the spec.

**Title:** `Built a macOS app that turns the notch into a dashboard for AI coding agents`

```
I had five agents running and no idea which one needed me. The notch was sitting
there doing nothing, so that's where they went.

One row per session, live: the task, the model, the terminal, the context window,
the spend. Blocked agents get answered from the notch. Clicking a row focuses that
agent's own terminal tab.

Free, open source, macOS 14+. Launched on Product Hunt today.

https://agentisland.in
```

### Also worth posting to

`r/SideProject` · `r/macapps` · `r/ClaudeAI` · `r/ChatGPTCoding` · `r/cursor` ·
`r/LocalLLaMA` (only if you add local-agent support) · `r/swift` (angle: the
NSStatusItem/notch work) · `r/commandline` (angle: the terminal-jump mechanism)

From the PlacesToPostYourStartup list, these are the ones that actually fit:
`r/alphaandbetausers` · `r/indiehackers` · `r/SideProject` · `r/microsaas`

Skip `r/shamelessplug`, `r/plugyourproduct`, `r/coupons` — no real readers.

---

## 3. Directories worth the time

Of the 81 in that repo, these are the ones with real traffic for a macOS devtool.
The rest are link farms and are not worth the form-filling.

| Site | Why | Needs |
|---|---|---|
| **AlternativeTo** | Ranks for "alternative to X" searches for years | account |
| **Awesome Indie** | GitHub PR, no account | PR |
| **SaaSHub** | Decent SEO, free listing | account |
| **Slant** | "Best macOS menu bar apps" lists rank well | account |
| **Indie Hackers** | Community, not a directory — post as a story | account |
| **BetaList** | Only if you pitch it as early access | submission |
| **Hacker News** | See above | account |

### awesome-list PRs — the best return for the effort

These are plain GitHub pull requests, no signup, and they keep paying out:

- `awesome-mac` — the big one for macOS apps
- `awesome-claude-code` — directly your audience
- `awesome-macos-command-line`
- `awesome-swift` — if you frame it as a Swift/AppKit app

One line each, something like:

```
* [Agent Island](https://github.com/Tiwari1999/Agent-Island) - Every AI coding
  agent you run, in the MacBook notch. Claude Code, Codex, Cursor, Gemini CLI and
  OpenCode in one panel. ![open-source](…) ![free](…)
```

Match the badge style each list already uses or the PR gets closed.

---

## 4. Before you post anywhere else

Two things will cost you installs from every post above.

**1. There's no downloadable build.** `v0.5.12` has no release assets, so anyone
arriving has to clone and build it. HN and r/macapps will tolerate that; nobody
else will. Attach a DMG to the release, or lead with the Homebrew line everywhere.

**2. The app isn't notarised.** `packaging/sparkle-public-ed-key` still holds
`REPLACE_ME_WITH_generate_keys_-p_OUTPUT`, and `release.sh` refuses to cut a
release with the placeholder — a build shipped without the real key can never
auto-update.

Until that's fixed, say so in the post. "Not notarised yet, right-click → Open"
costs you a few installs. Letting people discover it themselves costs you the
comment thread.

**On timing:** everything above assumes the Product Hunt page is live and you can
link it. Don't post all of these in one day. HN first, then one subreddit a day.
A burst of identical links across sites on the same afternoon is the pattern spam
filters are built to catch.
