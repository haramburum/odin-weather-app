# Weather App 🌤️

A responsive weather forecasting application built as part of The Odin Project curriculum. It fetches real-time weather data and dynamically updates the UI without page reloads.

## 🔗 Links

- **[Live Demo](https://haramburum.github.io/odin-weather-app/)**
- **[Odin Project Lesson](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)**

---

## 🚀 Key Features

- **Asynchronous Data:** Interacts with the Visual Crossing Weather API using `async/await`.
- **Smart Location:** Automatically detects the user's city via IP Geolocation API on initial load.
- **Unit Toggle:** Instantly switches between Celsius (°C) and Fahrenheit (°F) on the client side, saving user preferences in `localStorage`.
- **Tech Stack:** JavaScript (ES6+), Webpack, CSS.

---

## 🛠️ Getting Started

To run this project locally, execute the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build