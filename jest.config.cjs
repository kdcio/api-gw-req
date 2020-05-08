module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/__helpers'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.js'],
};
