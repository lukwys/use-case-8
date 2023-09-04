import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { UserList } from './UsersList';
import { store } from '../store/store'

describe('UserList Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
  });

  test('renders UserList header', () => {
    expect(screen.getByText(/User List/i)).toBeInTheDocument();
  });

  test('checks if "No users available" is displayed initially', () => {
    expect(screen.getByText(/No users available./i)).toBeInTheDocument();
  });

  // Additional tests can be added here to check for the presence of users
  // once they are added to the Redux store.
});
