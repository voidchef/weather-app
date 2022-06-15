# Weather App

Project to create a Weather App

## Live Demo

[Weather App](https://voidchef.github.io/weather-app/)

**Note:** This Website works best with High Resolution Screens (1080p and up). Check the [improvements section](#improvements) for future updates.

## Features

- Get current, 24 hours and weekly forecast.
- Search cities worldwide.
- Switch between imperial and metric systems.

## Built with

### Technologies

- JS
- CSS
- HTML

### Tools

- Visual Studio Code
- Linux terminal
- Git and GitHub
- ESLint
- Prettier
- npm
- Webpack

### Third party code

- [Google Fonts](https://fonts.google.com/)

## Outcome

- Used **ES6 Modules** for more modular code.
- Used CSS3 **grid** and **flex** to create layout.
- Used **Git** and **GitHub** for project management.
- Tried to maintain **clean code**.
- **Cross tested** on Firefox and Chromium based browsers.

## Improvements

Features I am going to add to this app:

- Approach a Responsive Web Design(RWD)
- Add error handling for incorrect city name

## Summary

### What I learned

- Used revealing module pattern for better code organizing.
- Used public API to get data.
- Used Webpack to build the app.
- Used third-party library for date and time formatting.
- learned about JavaScript promises
- learned about async/await in JavaScript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need `Node.js` and `npm` installed globally on your machine.

- [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Get a free API key at [https://openweathermap.com](https://openweathermap.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Artis-Dev/weather-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in `./src/components/weather.js`
   ```js
   const API_KEY = "YOUR API KEY";
   ```
5. Build an app
   ```sh
   npm run build
   ```

## Contributing

Contributions, issues, and feature requests are welcome!

## Author

👤 **voidchef**

- GitHub: [voidchef](https://github.com/voidchef)
