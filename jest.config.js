module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.ts'],
  transformIgnorePatterns: ['./node_modules/'],
};
