# FlexLikes

A lightweight static FlexLikes page with a minimal HTTP server so you can expose it publicly.

## Run locally or in a container

1. Install Node.js (v18+ recommended).
2. Start the server:
   ```bash
   npm start
   ```
3. The site serves on `http://0.0.0.0:4173` by default. Set a custom port with the `PORT` environment variable if needed.

The server simply serves `index.html` from the repository root, so you can deploy it to any static host or reverse-proxy the running server to make it reachable from the internet.
