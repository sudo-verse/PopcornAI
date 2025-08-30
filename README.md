# PopcornAI 🎬

PopcornAI is a web app that lets you browse movies and get AI-powered recommendations. It shows **now playing, popular, top-rated, and upcoming movies**, and you can search for movies based on genres or similar titles.

## Features

- Browse now playing, popular, top-rated, and upcoming movies.
- Search movies by genre or similar titles using GPT-powered recommendations.
- Responsive UI for desktop and mobile (built with React + TailwindCSS).
- Firebase authentication (Sign In / Sign Up).
- Smooth movie previews with background videos and blur effects.

## Tech Stack

- **Frontend:** React, TailwindCSS
- **State Management:** Redux Toolkit
- **Authentication:** Firebase
- **APIs:** TMDB API, Gemini API
- **Hosting:** GitHub Pages / Vercel / Netlify (your choice)

## Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/popcornai.git
cd popcornai
2️⃣ Install Dependencies

Make sure you have Node.js and npm installed:

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add your API keys:

VITE_APP_TMDB_API=your_tmdb_api_key
VITE_GEMINI_KEY=your_gemini_api_key


Replace your_tmdb_api_key with your actual TMDB API key.
eplace your_gemini_api_key with your actual GEMINI API key.

4️⃣ Start the Development Server
npm run dev


Open http://localhost:5173 in your browser to view the app.
