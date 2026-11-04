# Vender Search – Frontend

React + Vite + Tailwind CSS frontend concept for the Vender Search vendor-discovery project.

## Requirements
- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Pages included
- `/` – Landing page
- `/dashboard` – User dashboard
- `/search` – Vendor search and filters
- `/search/progress` – Search progress demo
- `/vendors/:id` – Vendor details
- `/saved` – Saved vendors (localStorage)
- `/history` – Sample search history
- `/login` and `/signup` – Authentication UI demo
- `/profile` and `/settings` – Profile/settings UI

## Important
This is a frontend-only prototype. Vendor records are illustrative sample data in `src/data.js`.
Search, scraping, Gemini, authentication, and database persistence are not connected yet.
Do not treat sample vendor details, contact information, ratings, or URLs as verified facts.

## Connect the backend later
Create a frontend API client in `src/services/` and replace sample data with FastAPI endpoints.
Keep your Gemini API key on the backend in an environment variable; never expose it in frontend code.
