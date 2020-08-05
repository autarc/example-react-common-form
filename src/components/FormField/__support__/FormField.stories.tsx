/**
 * # Form Field (Stories)
 *
 *
 */

import { useForm, FormProvider } from 'react-hook-form';
import React, { ReactChildren } from 'react';

import { FormField } from '..';

type Story = () => ReactChildren;

export default {
  title: 'components/FormField',
  decorators: [
    //
    (story: Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => {
              console.log('data', data);
            })}
          >
            {story()}
            <input type="submit" />
          </form>
        </FormProvider>
      );
    },
  ],
};

export const Minimal = () => <FormField name="first_name" />;

export const ControlledValue = () => <FormField name="last_name" value="Lovelace" />;

export const CustomStyled = () => (
  <FormField
    name="color"
    label="Favorite Color?"
    className="test"
    rules={{
      minLength: {
        value: 4,
        message: 'Short color names are not supported',
      },
    }}
  />
);
