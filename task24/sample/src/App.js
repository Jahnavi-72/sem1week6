import React from 'react';
import Profile from './Profile';
import './Profile.css';

const App = () => {
  return (
    <div>
      <Profile
        name="John Doe"
        location="New York, USA"
        profilepicture="https://via.placeholder.com/100"
        bio="Software engineer with a passion for open-source projects."
      />

      <Profile
        name="Jane Smith"
        location="London, UK"
        profilePicture="https://via.placeholder.com/100"
      />
    </div>
  );
};

export default App;