import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent({ message, user }) {
  return (
    <div>
      <h2>Parent Component</h2>
      {/* Passing the props down to the ChildComponent */}
      <ChildComponent message={message} user={user} />
    </div>
  );
}

export default ParentComponent;
