/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Job status colors
        'status-applied': '#3B82F6',      // Blue
        'status-interviewing': '#F59E0B', // Amber
        'status-rejected': '#EF4444',     // Red
        'status-offer': '#10B981',         // Green
      }
    },
  },
  plugins: [],
}

