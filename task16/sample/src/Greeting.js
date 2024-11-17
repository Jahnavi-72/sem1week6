import React, { useState } from 'react';

function HelloGoodbye() {
  // Initialize state with "Hello"
  const [message, setMessage] = useState('Hello');

  // Toggle the message between "Hello" and "Goodbye"
  const toggleMessage = () => {
    setMessage((prevMessage) => (prevMessage === 'Hello' ? 'Goodbye' : 'Hello'));
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
}

export default HelloGoodbye;