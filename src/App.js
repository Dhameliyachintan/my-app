import React from 'react';
import Array from './container/Array';
import Employe from './container/Employe';
import Medicine from './container/Medicine';

function App(props) {
  return (
    <div>
     <Employe/>
     <Medicine />
     <Array />
    </div>
  );
}

export default App;