/**
 * # Form Field (Hooks)
 *
 *
 */

import type { ValidationRules, FieldError } from 'react-hook-form';
import type { ReactNode, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMemo, useEffect } from 'react';

export enum FormFieldType {
  'TEXT' = 'text',
  'PASSWORD' = 'password',
}

const DEFAULT_FORM_FIELD_TYPE = FormFieldType.TEXT;
const DEFAULT_RULES: ValidationRules = {
  required: {
    value: true,
    message: 'Input required',
  },
};

let counter = 0;

export type UseFormFieldParams = {
  name: string;
  label?: ReactNode;
  type?: FormFieldType;
  rules?: ValidationRules;
  value?: string | number;
  onChange?(e: ChangeEvent<HTMLInputElement>): unknown;
};

/**
 *
 * @param param -
 */
export function useFormField({
  name,
  label = name,
  type = DEFAULT_FORM_FIELD_TYPE,
  rules = DEFAULT_RULES,
  value,
  onChange,
}: UseFormFieldParams) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setValue, register, errors } = useFormContext();

  const id = useMemo(() => {
    counter++;
    return `common-form-field:${name}-${counter}`;
  }, []);

  useEffect(() => {
    setValue(name, value);
  }, [name, value]);

  return {
    id,
    name,
    label,
    type,
    register: register(rules),
    error: errors[name] as FieldError | undefined,
    onChange,
  };
}
