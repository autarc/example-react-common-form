# Example React Common Form

An example [React](https://reactjs.org) UI component library for building common forms.

## Features

- based on [react-hook-form](https://react-hook-form.com) for efficient interaction & render handling
- supports uncontrolled & controlled usage
- customizable styles and validations
- built-in types for `text` / `password` inputs

## How To Use

```tsx
import type { FunctionComponent } from 'react;
import React from 'react';
import { Form, FormField, FormFieldType } from 'example-react-common-form';

type LoginData = {
  username: string;
  password: string;
}

type LoginFormProps = {
  onSubmit(data: LoginData): unknown;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <FormField name="username" label="Username" inputClassName="custom-styles" />
    <FormField name="password" label="Password" type={FormFieldType.PASSWORD} />
    <button type="submit">Login</button>
  </Form>
)
```

More examples and scenarios are [described here](./src/__support__/CommonForm.stories.tsx).

## Getting Started

Since this library is an example **it is currently not published as a standalone module at npm.**

Nevertheless the setup is done for doing so by ensuring that the library is properly tested and built. For local usage referencing the module directly (e.g. [yarn link](https://classic.yarnpkg.com/en/docs/cli/link)) should therefore be sufficient.

### Install

```sh
yarn
# or 'yarn install'
```

### Test

```sh
yarn test
```

### Development

For convenient development [Storybook](https://storybook.js.org) is set up as an interactive playground.

```sh
yarn start
# or 'yarn start:storybook'
```

### Documentation

There is currently no additional documentation of the components / API besides [the static exported Storybook app](#development). Since the codebase itself consists only of a few files in the `/src` directory checking them out won't take much time.

## Concepts

As forms are an users direct interface to insert data into an application its a crucial aspect in many flows. There are several aspects that have to be considered from validation, styling, composability, performance and developer ergonomics. Taking those into account the following ideas were used for guidance:

- to support different flows (e.g. ranging from a simple inline form to more a complex multi-step wizard) the base idea is to have a `Form` container which acts as a boundary for state changes

  - this allows to have multiple instances at the same time even on the same view without risking conflicts while also being resilient towards DOM structure changes

- providing a small API surface rather than a multiple parts which need granular adjustments allow to ease the complexity and adoption by having just a few blocks that can be repeatedly used

  - as a result there are two components exposed `Form` and `FormField`, while the later can also be referenced as a namespaced component via `Form.Field`
  - furthermore `useFormField` and `FormFieldTypes` are exposed to create custom components
  - for accessibility by default a `FormField` is required while any kind of submit element is interactive

- instead of reinventing the wheel the core logic is wrapped around functionalities by [react-hook-form](https://react-hook-form.com) using a context provider and hooks for consuming it

  - a benefit of using is the support of [extendable validation approaches](https://react-hook-form.com/api#register) based on [browsers built-in constraints](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) as well as [custom schemas through resolvers](https://github.com/react-hook-form/resolvers)

- on top of the being an uncontrolled component a `FormField` can also be controlled by passing the respective props for `value` and `onChange` to it

- there are several ways of applying styles to an HTML element but for simplicity each of the different components has a defined CSS class name for selecting it globally, as well as receiving optional props as `*className` to modify specific instances

- which does an excellent work of providing. This library is small abstraction on top to ease the usage even further by providing Form-Field building blocks relation
