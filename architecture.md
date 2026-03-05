# Third Eye — Architecture

## Overview

Third Eye is a blindfold reading / extrasensory perception (ESP) practice app built in the tradition of Paramashiva and Swamiji (Nithyananda). Users attempt to perceive words or images displayed on screen while blindfolded, receiving AI-powered coaching focused on their inner state (perception vs thinking) rather than answer correctness.

## Hosting & Deployment

- **GitHub Pages**: Static site at `https://kuzinets.github.io/third-eye/`
- **No backend server** — everything runs client-side in the browser
- **Local dev**: Optional `server.py` (Python `SimpleHTTPRequestHandler` on port 9471) for local testing
- **Zero build step** — plain HTML/CSS/JS served directly

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (no frameworks) |
| AI | OpenAI GPT-4o via REST API (browser -> `api.openai.com`) |
| Speech | Web Speech API (recognition + synthesis) |
| Audio | Web Audio API (binaural beats, sound effects) |
| Storage | Browser localStorage (per-user, persistent) |
| Hosting | GitHub Pages (static) |

## File Structure

```
third-eye/
  index.html        — Single-page app markup (all panels)
  app.js            — All application logic (~1700 lines)
  style.css         — Theme system + all styles
  data.js           — Word lists (visual + abstract) and emoji/image list
  kailasa-flag.png  — Logo image
  server.py         — Local dev server (not deployed)
  test-llm.js       — LLM prompt test harness (not deployed, gitignored)
  architecture.md   — This file
```

## Application Flow

```
Password Gate -> Settings Panel -> Countdown (3s) -> Exercise -> [auto-advance loop]
                     |               |                            |
                     |               +----------------------------+
                     |                  (Exact/Close/No/Skip)
                     |
                     +-- Dashboard (stats)
                     +-- Activity Log (interaction history)
```

## Key Modules (all in app.js)

### Authentication
- XOR-encrypted OpenAI API key, decrypted at login with password
- Three accounts: **kailasa**, **xy** (both trackable), **guest** (no tracking)
- Session persisted via `sessionStorage`

### LLM Integration (v2.1 — Direct Transmission)
- **Model**: GPT-4o via OpenAI Chat Completions API (temp 0.4, max 120 tokens)
- **Single AI mode**: 1 sentence responses. Direct. Sensation-based. No analysis.
- **5 response approaches** chosen based on what's happening:
  1. **Genuine Perception** — "Stay there. Visual or feeling?"
  2. **Thinking/Guessing** — "Where did you sense that — visual, feeling, or knowing?"
  3. **Sensory Deepening** — work with texture of their word to guide next perception
  4. **Empty Space** — "Stay here. What wants to arrive from this silence?"
  5. **Pattern Breaking** — "Stop describing. Just receive."
- **Response format**: JSON `{rating: "exact|close|warm|cold", message: "..."}`
- Rating drives sound effects only; the user never sees it
- **Prompt history**: `prompt-history.md` tracks all prompt versions, failures, and what to watch for. Must be read before any prompt changes.

### Speech Recognition
- `webkitSpeechRecognition` (Chrome/Edge)
- Continuous listening, processes final results
- Voice commands: "open", "done", "ready", "reveal" -> stop and judge
- Transcript cleaned of filler phrases ("I think it's...", "it looks like...")

### Semantic Matching (fallback only)
- **Levenshtein distance** for typo detection
- Used only when LLM call fails — provides simple "keep going" phrases
- `getSemanticDistance()` returns 0-8 score

### Audio System
- **Sound effects**: Correct chime (E-G-C), try-again tone, alarm, session alarm
- **Background music** (Web Audio API oscillators):
  - Theta 6Hz — deep meditation (binaural, requires headphones)
  - Gamma 40Hz — awareness (binaural)
  - Alpha 10Hz — relaxed focus
  - 528Hz Solfeggio — healing tone
  - Om 136.1Hz — earth frequency
- Each generator creates layered soundscapes: base oscillators + reverb + noise beds + LFOs

### Timers
- **Session timer**: Counts down total practice time, fires alarm on expiry
- **Item timer**: Per-word/image time limit, prompts user when expired
- **Reminder timer**: Repeating alarm for practice scheduling
- No auto-advance on expiry — user always controls the pace

### Session Tracking
- Per-user localStorage: `thirdeye-{user}-stats`
- Tracks per day: sessions, items, exact, close, no
- Dashboard shows today's stats + 14-day history table

### Activity Log
- Per-user localStorage: `thirdeye-{user}-activitylog`
- Columns: Date, Type (Word/Image), Target, User Said, App Response
- Logged on every AI feedback response
- Never wiped — persistent across sessions
- Accessible from bottom of settings panel

### Themes
Three themes via CSS custom properties:
- **Light**: White background, orange accent
- **Dark**: Dark blue background, warm orange accent
- **Blackout**: Pure black, minimal contrast (for practice rooms)

## Data Flow: Single Interaction

```
1. Word/Image displayed on screen (user's eyes closed)
2. User speaks -> Web Speech API -> transcript
3. Transcript cleaned of filler words
4. Send to GPT-4o: target + guess + history ("1 sentence. Direct. Sensation-based.")
5. Receive JSON {rating, message}
6. Play sound based on rating
7. Speak message via TTS (1 sentence, sensation-based)
8. Log to activity log
9. User says "open"/"done" or presses Exact/Close/No
10. Track result -> auto-advance to next item
```

## localStorage Keys (per user)

| Key | Contents |
|-----|----------|
| `thirdeye-{user}-stats` | `{date: {sessions, items, exact, close, no}}` |
| `thirdeye-{user}-activitylog` | `[{date, type, target, userSaid, response}]` |
| `thirdeye-{user}-theme` | `"light"`, `"dark"`, or `"blackout"` |
| `thirdeye-{user}-bgMusic` | `"none"`, `"theta"`, `"gamma"`, `"alpha"`, `"solfeggio"`, `"om136"` |
| `thirdeye-{user}-trackDefault` | `"true"` or `"false"` |
| `thirdeye-{user}-voice` | Selected TTS voice URI |
| `thirdeye-{user}-audioInput` | Microphone device ID |
| `thirdeye-{user}-audioOutput` | Speaker device ID |

## Browser Requirements

- Chrome or Edge (for `webkitSpeechRecognition`)
- Web Audio API support
- localStorage enabled

## Version History

- **v1.0** (`v1.0-multi-feedback`): Multiple feedback modes (simple, hot/cold, guided, spiritual, custom)
- **v2.0** (`v2.0-awakened-presence`): Single AI mode, 5 response types, no templates
- **v2.1** (`v2.1-direct-transmission`): Radical brevity — 1 sentence, sensation-based, no analysis
