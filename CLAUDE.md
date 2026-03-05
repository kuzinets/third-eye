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
