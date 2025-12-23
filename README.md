# FlexLikes

A lightweight static FlexLikes page with a minimal HTTP server so you can expose it publicly.

Now includes a public follow counter stored via CountAPI, ready for GitHub Pages at
`https://bujamin05.github.io/flexlikes/`.

## Run locally or in a container

1. Install Node.js (v18+ recommended).
2. Start the server:
   ```bash
   npm start
   ```
3. The site serves on `http://0.0.0.0:4173` by default. Set a custom port with the `PORT` environment variable if needed.

The server simply serves `index.html` from the repository root, so you can deploy it to any static host or reverse-proxy the running server to make it reachable from the internet.

## Deploy on GitHub Pages (e.g., https://bujamin05.github.io)

If you prefer a zero-backend setup, you can host the static `index.html` directly on GitHub Pages:

1. Push this repository to GitHub under your account (e.g., `bujamin05/flexlikes`).
2. In the GitHub repository settings, enable **Pages** to deploy from the `main` branch (root folder).
3. After GitHub builds the site, access it at `https://bujamin05.github.io` if the repo name matches your username, or at `https://bujamin05.github.io/<repo-name>` for project pages.

No additional build steps are required—the page is fully static. If you also keep the Node server for other environments, it will continue to serve the same `index.html` without changes.
