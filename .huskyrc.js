/**
 * # Prettier Configuration
 *
 * See: https://github.com/typicode/husky
 */

module.exports = {
  hooks: {
    'pre-commit': 'yarn lint && yarn pretty-quick --staged',
    'commit-msg': 'yarn commitlint -E HUSKY_GIT_PARAMS',
  },
};
