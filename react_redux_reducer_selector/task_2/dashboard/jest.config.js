module.exports = {
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!data-uri-to-buffer|node-fetch)/',
  ],
  testMatch: ["<rootDir>/src/**/*.test.js"],
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
