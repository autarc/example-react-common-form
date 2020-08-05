/**
 * # Commitlint Configuration
 *
 * See: https://commitlint.js.org/
 *      https://commitlint.js.org/#/reference-configuration
 *      https://commitlint.js.org/#/reference-rules
 */

const MAX_HEADER_LENGTH = 100;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', MAX_HEADER_LENGTH],
  },
};
