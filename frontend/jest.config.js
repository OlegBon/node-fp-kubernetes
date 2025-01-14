module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest", // додаємо mjs для підтримки модулів
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // змінюємо регулярний вираз, щоб не ігнорувати axios
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // для стилів
    "^axios$": "<rootDir>/__mocks__/axios.js", // додаємо маппінг для axios, щоб використовувати мок
  },
  testMatch: [
    "<rootDir>/src/**/*.test.js", // шаблон для тестових файлів
  ],
};

