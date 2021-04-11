module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "~/(.*)$": "<rootDir>src/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
