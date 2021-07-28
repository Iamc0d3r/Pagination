import React from 'react';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {users.map(users => (
        <li key={users.id} className='list-group-item'>
          {users.id}
        </li>
      ))}
    </ul>
  );
};

export default Users;
