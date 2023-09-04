import React from 'react';
import { useSelector } from 'react-redux';

 export const UserList = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName} - {user.email} <br />
              Message: {user.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
