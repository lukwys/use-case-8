import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { UserForm } from './UserForm';

describe('UserForm Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  });

  test('renders UserForm', () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('checks if Submit button is initially disabled', () => {
    expect(screen.getByText('Submit').closest('button')).toBeDisabled();
  });

  test('checks if Submit button is enabled after filling out the form', () => {
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'This is a message with more than 30 characters.' },
    });

    // Check if the Submit button is enabled
    expect(screen.getByText('Submit').closest('button')).toBeEnabled();
  });
});