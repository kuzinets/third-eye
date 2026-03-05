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

## AI Response Design (v2.1 — Direct Transmission)
- Single unified AI mode — no dropdown, no mode switching
- Responses must be 1 sentence (2 max). Direct. Sensation-based. No analysis.
- Ask about BODY LOCATION or SENSORY CHANNEL, never about "shifts" or "mental leaps"
- Work with the sensory quality of what they said to guide next perception
- Never analyze their process — point them to sensation
- Never repeat same response twice in a session

## IMPORTANT: Prompt History Log
**Before making ANY changes to the LLM system prompt, READ `prompt-history.md` first.**
This file tracks every prompt version, what failed, what worked, and what to watch for.
It prevents accidentally rolling back to patterns that created dullness or mechanical repetition.
Check the Activity Log in the app for real response data to inform adjustments.

# currentDate
Today's date is 2026-03-05.
