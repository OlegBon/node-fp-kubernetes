module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest", // додаємо mjs для підтримки модулів
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // змінюємо регулярний вираз
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testMatch: [
    "<rootDir>/src/**/*.test.js"
  ]
};
