/**
 * # Jest Configuration
 *
 * See: https://jestjs.io/ - https://jestjs.io/docs/en/configuration
 */

module.exports = {
  verbose: true,
  testRunner: 'jest-circus/runner',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/test/setup-dom.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/__mocks__/style-mock.js',
  },
  testMatch: ['<rootDir>/src/**/?(*.)spec.tsx'],
};
