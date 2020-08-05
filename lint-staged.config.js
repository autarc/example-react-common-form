/**
 * # Lint Staged Configuration
 *
 * See: https://github.com/okonet/lint-staged#options
 */

module.exports = {
  '*.{js,ts}': ['yarn run lint:fix', 'git add'],
  '*.{json,md}': ['yarn prettier --write', 'git add'],
};
