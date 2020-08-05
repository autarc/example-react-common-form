/**
 * # Form (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { Form } from '..';

const mockSubmitHandler = jest.fn();

describe('Form rendering', () => {
  it('should display the correct output', () => {
    render(
      <Form onSubmit={mockSubmitHandler}>
        <div data-testid="example">Example</div>
      </Form>,
    );

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByTestId('example')).toBeInTheDocument();
  });

  it('should use customized styling', () => {
    render(
      <Form onSubmit={mockSubmitHandler} className="example-style">
        <div>Example</div>
      </Form>,
    );

    expect(screen.getByRole('form')).toHaveClass('example-style');
  });
});
