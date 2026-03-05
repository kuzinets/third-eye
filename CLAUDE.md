# Third Eye

## Hosting
- **GitHub Pages**: https://kuzinets.github.io/third-eye/
- Purely static — no backend server. `server.py` is for local dev only.
- All AI calls go from the browser directly to OpenAI's GPT-4o API.

## Key Facts
- Single-page vanilla HTML/CSS/JS app (no build step, no frameworks)
- OpenAI API key is XOR-encrypted in app.js, decrypted client-side at login
- Three accounts: kailasa, xy, guest — all data in browser localStorage
- See `architecture.md` for full system documentation

## AI Response Design (v2 — Awakened Presence)
- Single unified AI mode — no dropdown, no mode switching
- 5 response types chosen by GPT-4o based on what's actually happening:
  1. Recognize genuine perception (direct hit, spontaneous)
  2. Distinguish thinking from perceiving (random/disconnected guesses)
  3. Validate "I don't know" without spiritual bypass
  4. Catch and break stuck patterns
  5. Deepen inquiry (ask WHERE in body, HOW it arrived)
- Critical: never repeat same response twice, 1-2 sentences max, recognize semantic resonance
- Fallback to simple phrases only when LLM call fails

# currentDate
Today's date is 2026-03-05.
