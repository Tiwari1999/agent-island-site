# Agent Island — launch posts

Everything below is ready to paste. Nothing here is auto-posted: each one needs
your account, and most of these communities ban submissions that look automated.

Facts used in the copy, all verified against the repo on 2026-10-15:

| | |
|---|---|
| Agents | Claude Code, Codex, Cursor, Gemini CLI, OpenCode |
| Terminals it can jump to | 8 (tmux, Warp, iTerm2, Terminal.app, kitty, WezTerm, Ghostty, cmux) |
| Requires | macOS 14+ |
| Licence | MIT |
| Cost | free |
| Install | `brew install tiwari1999/tap/agent-island`, or `--cask` for the prebuilt DMG |

**Do not claim** a notarised build or a signed DMG. Auto-update *is* live now
(Sparkle, against https://agentisland.in/appcast.xml), so that one is fair game.
See "Before you post" at the bottom.

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

    brew install tiwari1999/tap/agent-island

That route builds on your Mac, so nothing is quarantined and there's no Gatekeeper
prompt at all. There's also a prebuilt DMG (`brew install --cask
tiwari1999/tap/agent-island`, Apple silicon), but it isn't notarised yet, so that
one needs right-click → Open on first launch. I'd rather say so up front than
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

    brew install tiwari1999/tap/agent-island

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

Checked all four on 15 Oct 2026. Only one was actually actionable:

| List | State | Action |
|---|---|---|
| `awesome-mac` | **PR open** | [#3493](https://github.com/jaywcjlove/awesome-mac/pull/3493) — the list already had an "Agent Island" entry pointing at `tristan666666/agent-island`, which is **deleted** (repo and user both 404). The PR repoints it at the live project. |
| `awesome-claude-code` | **Blocked** | Issues are restricted to collaborators ("An owner of this repository has limited the ability to create an issue"). Submissions were still landing on 15 Oct (#3173–3175), so this looks temporary — retry in a few days. Note it takes an **issue form**, not a PR; a PR risks an interaction ban. Agent Island passes the bar (14+ days of active development). |
| `awesome-macos-command-line` | **Dead** | `archived: true`, last push 4 Mar 2026. Accepts nothing. Also a CLI list — a GUI app does not belong. |
| `awesome-swift` | **Poor fit** | Sections are Libs, Patterns, Dependency Managers, Boilerplates. No section for shipped apps. |

For `awesome-claude-code` when it reopens: category
`Observability & Monitoring > Session Monitors`, and the draft is in the session
scratchpad. Be aware the form's final checkbox is a trap — leave it unchecked.

One line each, something like:

```
* [Agent Island](https://github.com/Tiwari1999/Agent-Island) - Every AI coding
  agent you run, in the MacBook notch. Claude Code, Codex, Cursor, Gemini CLI and
  OpenCode in one panel. ![open-source](…) ![free](…)
```

Match the badge style each list already uses or the PR gets closed.

---

## 3b. Distribution status (22 Oct 2026)

| Target | State | Next action |
|---|---|---|
| `awesome-mac` [#3493](https://github.com/jaywcjlove/awesome-mac/pull/3493) | Open, no response | Wait. Replaces a dead link, so it should land. |
| `open-source-mac-os-apps` [#1672](https://github.com/serhii-londar/open-source-mac-os-apps/pull/1672) | Open, no response | Wait. |
| `iCHAIT/awesome-macOS` | **Branch pushed, PR not opened** | One click: https://github.com/iCHAIT/awesome-macOS/compare/master...Tiwari1999:add-agent-island?expand=1 — the API returned 404 on PR creation from the CLI token, though the repo accepts PRs from others. |
| `awesome-claude-code` | Blocked | Issues restricted to collaborators. Re-check periodically. |
| `awesome-macos-command-line` | Dead | Archived. |
| `awesome-swift` | Poor fit | No section for apps. |

### Sites that need you signed in

Claude cannot create accounts or sign in, including via Google SSO. Once you
are logged in to these in Chrome, the submissions themselves can be automated:

- dev.to, Indie Hackers, SaaSHub, AlternativeTo, BetaList, Slant

### Sites that are unreachable regardless

- **Reddit** — blocked for Claude's browser tool *and* 403 server-side. Posts
  must be pasted by you; drafts are in the session scratchpad.
- **Lobsters** — invite only.

### Why this matters more than more directories

AI engines corroborate a brand against off-site mentions (Reddit, HN, reviews,
editorial). The domain is 20 days old with 1 GitHub star and zero merged
listings, which is why models call it untrusted. A long tail of low-traffic
directory listings does not fix that, and can read as link spam. HN and Reddit
mentions do.

## 4. Before you post anywhere else

Two things will cost you installs from every post above.

**1. ~~There's no downloadable build.~~ Fixed.** `v0.5.12` now carries
`AgentIsland-0.5.12.dmg` (2.4MB, arm64), and `brew install --cask
tiwari1999/tap/agent-island` installs it.

**2. ~~A build shipped without the Sparkle key can never auto-update.~~ Fixed.**
The EdDSA key exists, the app carries its public half, and the appcast is live at
https://agentisland.in/appcast.xml. Installs from here on can update themselves.

**3. The app still isn't notarised.** That needs an Apple Developer account
($99/yr). Consequence: the DMG and cask route gets "cannot be opened" on first
launch and needs right-click → Open. The formula route (`brew install
tiwari1999/tap/agent-island`) compiles locally and has no Gatekeeper prompt at
all, which is why it's the one to lead with.

Say so in the post either way. "Not notarised yet, right-click → Open" costs you
a few installs. Letting people discover it themselves costs you the comment thread.

**4. The bare cask name doesn't exist.** `brew install --cask agent-island`
fails: homebrew-cask requires notarisation *and*
[225 stars for a self-submission](https://docs.brew.sh/Package-Acceptance-Policy#notability).
Always post the tap-prefixed command.

**On timing:** everything above assumes the Product Hunt page is live and you can
link it. Don't post all of these in one day. HN first, then one subreddit a day.
A burst of identical links across sites on the same afternoon is the pattern spam
filters are built to catch.
