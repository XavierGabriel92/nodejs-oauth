import { pathsToModuleNameMapper } from "ts-jest";
import tsConfig from "./tsconfig.json";

export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules", "/config", "/build"],
  coverageProvider: "v8",
  preset: "ts-jest",
  roots: ["<rootDir>"],
  collectCoverageFrom: [
    "src/**/*ts",
    // "!src/index.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: "<rootdDir>/src",
  }),
  setupFilesAfterEnv: ["./tests/config/setupJest.ts"],
};
