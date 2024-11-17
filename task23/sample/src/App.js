import React from 'react';
import Button from './Button';


const App = () => {
  return (
    <div>
      <Button text="Primary Button" customClass="primary" onClick={() => alert('Primary Clicked')} />
      <Button text="Secondary Button" customClass="secondary" onClick={() => alert('Secondary Clicked')} />
      <Button text="Danger Button" customClass="danger" onClick={() => alert('Danger Clicked')} />
    </div>
  );
};

export default App;