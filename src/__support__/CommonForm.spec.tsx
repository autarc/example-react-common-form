/**
 * # Common Form (Test)
 *
 *
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Basic } from './CommonForm.stories';

const mockSubmitHandler = jest.fn((data) => {
  return Promise.resolve(data);
});

beforeEach(() => {
  render(<Basic {...Basic.args} onSubmit={mockSubmitHandler} />);
});

describe('CommonForm rendering', () => {
  it('should display the correct output', () => {
    const firstNameInputElement = screen.getByRole('textbox', {
      name: 'first_name',
    });
    expect(firstNameInputElement).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('CommonForm actions', () => {
  it('should display an error message when the field is required (default)', async () => {
    userEvent.click(screen.getByRole('button'));

    const alertElement = await screen.findByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('required');
    expect(mockSubmitHandler).not.toHaveBeenCalled();
  });

  it('should update the form state', async () => {
    const firstNameInput = screen.getByRole('textbox', {
      name: 'first_name',
    });
    await userEvent.type(firstNameInput, 'Ada');
    expect(firstNameInput).toHaveValue('Ada');
  });

  it('should pass the form state data on submit', async () => {
    const firstNameInput = screen.getByRole('textbox', {
      name: 'first_name',
    });
    await userEvent.type(firstNameInput, 'Ada');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith(
      {
        first_name: 'Ada',
      },
      expect.anything(),
    );
  });
});
