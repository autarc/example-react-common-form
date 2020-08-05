/**
 * # Common Form (Stories)
 *
 *
 */

import type { FunctionComponent } from 'react';
import React, { useState } from 'react';

import { Form, FormField, FormFieldType } from '..';

interface ComponentStoryFormat<A = Record<string, unknown>> extends FunctionComponent<A> {
  args: A;
}

export default {
  title: 'CommonForm',
};

const submitLogger = (data: unknown) => {
  console.log('FormState', data);
};

// --- //

type BasicArgs = {
  onSubmit: typeof submitLogger;
};

export const Basic: ComponentStoryFormat<BasicArgs> = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Field name="first_name" />
    <button type="submit">Submit</button>
  </Form>
);
Basic.args = {
  onSubmit: submitLogger,
};

// --- //

type ControlledArgs = BasicArgs;

export const Controlled: ComponentStoryFormat<ControlledArgs> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field
        name="first_name"
        label="First Name"
        value={firstName}
        onChange={(event) => {
          const value = event.target.value;
          setFirstName(value);
        }}
      />
      <button>Submit</button>
    </Form>
  );
};
Controlled.args = Basic.args;

type NestedArgs = BasicArgs;

export const Nested: ComponentStoryFormat<NestedArgs> = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <ul>
      <li>
        <Form.Field name="first_name" label="First Name" />
      </li>
      <li>
        <FormField name="password" type={FormFieldType.PASSWORD} />
      </li>
    </ul>
    <button type="submit">Submit</button>
  </Form>
);
Nested.args = Basic.args;

// --- //

type FormState = {
  first_name: string;
  last_name: string;
};

export const Reactive: ComponentStoryFormat = () => {
  const [result, setResult] = useState<FormState | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  return (
    <div>
      <Form
        onSubmit={(data: FormState) => {
          setIsPending(true);

          const delay = 1000; // = 1s
          setTimeout(() => {
            setIsPending(false);
            setResult(data);
          }, delay);
        }}
      >
        <Form.Field name="first_name" />
        <Form.Field name="last_name" />
        <input type="submit" value="Update" disabled={isPending} />
      </Form>
      {result && (
        <>
          <div>First Name: {result.first_name}</div>
          <div>Last Name: {result.last_name}</div>
        </>
      )}
    </div>
  );
};
Reactive.args = {};

// --- //

type ValidationArgs = BasicArgs;

export const Validation: ComponentStoryFormat<ValidationArgs> = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Field
      name="brand"
      rules={{
        pattern: {
          value: /^example\.brand\.name/,
          message: 'The brand should start with "example.brand.name" ...',
        },
      }}
    />
    <Form.Field
      name="dish"
      rules={{
        validate(value) {
          const requiredValue = 'Pizza';
          const errorMessage = `Favorite food is not recognized (can only be "${requiredValue}")`;
          return value === requiredValue || errorMessage;
        },
      }}
    />
    <Form.Field
      name="alias"
      rules={{
        minLength: 8,
      }}
    />
    <button>Submit</button>
  </Form>
);
Validation.args = Basic.args;
