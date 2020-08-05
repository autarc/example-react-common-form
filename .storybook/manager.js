/**
 * # Storybook Manager
 *
 *
 */

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: 'React Common Form',
  }),
});
