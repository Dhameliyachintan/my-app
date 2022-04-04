import React from 'react';
import Employee from './container/Employee';
import Medicine from './container/Medicine';

function App(props) {
  return (
    <div>
      <Medicine />
      <Employee/>
    </div>
  );
}

export default App;