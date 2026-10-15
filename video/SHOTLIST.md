# Agent Island — demo video shot list

Target: ~45-60s, 1:1 focus on the island (YouTube-tutorial style), notch always in frame.
Recorded with Recordly (auto-zoom + styled frame), exported to public/assets/demo.mp4.

## Precondition
- Mirroring OFF; built-in Liquid Retina XDR (3024x1964) is the MAIN display.
- Verify: `system_profiler SPDisplaysDataType | grep -i mirror` -> "Mirror: Off"
- Island running with >=4 agents in mixed states.

## Shots

| # | Feature | What happens on screen | Dwell |
|---|---------|------------------------|-------|
| 1 | Idle notch | Closed notch sitting in the menu bar, pill only. Cursor approaches. | 3s |
| 2 | Hover reveal | Notch expands into the panel. Session list visible. | 4s |
| 3 | Monitor | Scroll the list: vendor labels, model, terminal, ctx %, spend, burn rate. | 6s |
| 4 | Live update | A row changes state (busy -> tool call -> done) without interaction. | 5s |
| 5 | Ask / question | Question card appears: numbered options, per-option detail. | 6s |
| 6 | Explain | Click the lightbulb chip; explanation expands in amber. | 5s |
| 7 | Answer | Pick an option; card resolves, agent continues in terminal. | 4s |
| 8 | Approve | Permission card with real diff (+/- lines), Allow/Deny + shortcuts. | 6s |
| 9 | Jump | Click a row -> focus lands in that agent's exact terminal tab. | 5s |
| 10 | Reply | Type a free-text reply from the island, send. | 5s |
| 11 | Completion | Agent finishes: completion beat, sound, tinted state. | 4s |
| 12 | Close | Panel collapses back to the notch. | 2s |

## Recordly settings
- Auto-zoom: ON (targets the island automatically)
- Cursor smoothing: ON
- Frame: dark gradient wallpaper, ~24px padding, soft shadow, rounded corners
- Export: MP4, H.264, 1920x1080 or 1440x900, faststart

## Post (ffmpeg)
- `-movflags +faststart` so the moov atom is at the head
- Poster frame from the question-card shot (most explanatory single frame)
