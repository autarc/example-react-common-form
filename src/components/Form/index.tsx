/**
 * # Form
 *
 *
 */

import type { FunctionComponent, ReactNode } from 'react';
import type { SubmitHandler, UseFormOptions } from 'react-hook-form';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import clsx from 'clsx';

import { FormField } from '~/components/FormField';

type FormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- ease type casting afterwards
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  options?: UseFormOptions;
  className?: string;
};
interface FormFunctionComponent extends FunctionComponent<FormProps> {
  Field: typeof FormField;
}

export const Form: FormFunctionComponent = ({ options, className, onSubmit, children }) => {
  const methods = useForm(options);

  return (
    <FormProvider {...methods}>
      <form
        className={clsx('common-form__form', className)}
        onSubmit={methods.handleSubmit(onSubmit)}
        aria-label="form"
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Field = FormField;
