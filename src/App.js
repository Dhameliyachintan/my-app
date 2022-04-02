import React, {
  PureComponent
} from 'react';
import './App.css';

function App() {

  let arr1 =[10,20,30];
  let arr2 =[10,20];
  
  {/* //copyarry */}
  let arr3 = [...arr1, ...arr2];
  console.log(arr3);

}

export default App;
