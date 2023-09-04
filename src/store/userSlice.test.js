import userReducer, { addUser } from './userSlice';

describe('user reducer', () => {
  const initialState = {
    users: [],
  };

  it('should handle initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addUser', () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Hello, world!',
    };
    expect(userReducer(initialState, addUser(user))).toEqual({
      users: [user],
    });
  });
});