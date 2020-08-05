/**
 * # Storybook Preview
 *
 *
 */

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';

export const parameters = {
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'development',
    values: [
      {
        name: 'development',
        value: 'rgba(255, 71, 133, 0.5)',
      },
    ],
  },
};

export const decorators = [(storyFn, context) => withConsole()(storyFn)(context)];
