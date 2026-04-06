# hrytos-home

Hrytos company landing page — Node.js / Express / EJS.

## Structure

```
hrytos-app/
├── server.js               # Express app entry point
├── package.json
├── .gitignore
├── views/
│   └── index.ejs           # Main page template
└── public/
    ├── css/
    │   └── main.css        # All styles (variables, layout, components, responsive)
    ├── js/
    │   └── main.js         # Nav scroll, hamburger, smooth scroll
    └── assets/
        ├── README.md       # ← read this before dropping files in
        ├── herobgvideo.mp4 # drop here
        ├── herovector.png  # drop here
        ├── mobilevector.svg# drop here
        └── logo-light.png  # drop here
```

## Quick start

```bash
npm install
npm run dev     # nodemon — auto-restarts on file change
# or
npm start       # production
```

App runs at `http://localhost:3000` by default.  
Set `PORT` environment variable to override.

## Asset swap

See `public/assets/README.md` for exactly which files to drop in and where.

## Redirects

| Button | Destination |
|---|---|
| "I'm a warehouse operator" | `https://automatisor.hrytos.com` |
| "I'm a solution provider"  | `https://pipegen-assistant.hrytos.com` |
| Blog links | `https://hrytos.substack.com` |

Update these in `views/index.ejs` if the URLs change.

## Deployment

Standard Node.js deployment. Works on Railway, Render, Fly.io, Vercel (with adapter), or any VPS.  
Set `NODE_ENV=production` and `PORT` in your environment.
