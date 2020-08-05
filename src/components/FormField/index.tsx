/**
 * # Form Field
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';
import clsx from 'clsx';

import type { UseFormFieldParams } from './hooks';
import { useFormField } from './hooks';
import './styles.css';

export * from './hooks';

type FormFieldProps = UseFormFieldParams & {
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
};

export const FormField: FunctionComponent<FormFieldProps> = ({
  placeholder,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
  ...useFieldParams
}) => {
  const { id, label, name, type, register, onChange, error } = useFormField(useFieldParams);

  return (
    <div className={clsx('common-form-field', className)}>
      <label className={clsx('common-form-field__label', labelClassName)} htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx('common-form-field__input', inputClassName)}
        id={id}
        type={type}
        name={name}
        ref={register}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && error.message ? (
        <div className={clsx('common-form-field__error', errorClassName)} role="alert">
          {error.message}
        </div>
      ) : null}
    </div>
  );
};
