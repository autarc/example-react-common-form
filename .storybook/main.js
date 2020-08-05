/**
 * # Storybook Main
 *
 *
 */

const path = require('path');

const rootDirectory = path.resolve(__dirname, '..');
const sourceDirectory = `${rootDirectory}/src`;

module.exports = {
  stories: [`${sourceDirectory}/**/__support__/*.stories.tsx`],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
  ],
};
