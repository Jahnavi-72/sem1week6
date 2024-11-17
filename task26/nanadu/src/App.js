import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  // Define the data you want to pass
  const appMessage = "Hello from the App component!";
  const user = { name: "John", age: 30 };

  return (
    <div>
      <h1>App Component</h1>
      {/* Pass props to the ParentComponent */}
      <ParentComponent message={appMessage} user={user} />
    </div>
  );
}

export default App;

