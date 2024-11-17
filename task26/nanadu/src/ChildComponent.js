import React from 'react';

function ChildComponent({ message, user }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
      <p>User: {user.name}, Age: {user.age}</p>
    </div>
  );
}

export default ChildComponent;
