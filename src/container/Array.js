import React from 'react';

function Array(props) {

    // ------------------Array---------------------//
function App() {

   let arr1 =[10,20,30];
      let arr2 =[10,20];
      
      {/* //copyarry */}
      let arr3 = [...arr1];
      console.log(arr3);

      {/* //concate */}
      let arr4 = [...arr1,...arr2];
      console.log(arr4);

      {/* //mergine */}
      let arr5 = [99,...arr4,100];
      console.log(arr5);

      {/* //destructuring */}
      let arr6 = ['Amit',"Mayur"];
      let[fname,lname] = arr6;
      console.log(arr6[0]);
      console.log(fname);
      // console.log(lname);
}

// ------------Object-----------------//

function App(props) {
  let obj1 = {fname:'Amit',age:18};
  let obj2 = {lname:'parth',age:20};

  //copy
  let obj3 = {...obj1};
  console.log(obj3);

  //concate
  let obj4 = {...obj1,...obj2}; 
  // let obj5 = {...obj1,...obj2};
  console.log(obj4);

  //concate
  let obj5 = {fname:'Amit',age:18,city:'surat'};
  let obj6 = {fname:'red',age:18,city:'surat'};
  let obj7 = {fname:'red',age:18,city:'surat'};
  console.log(obj4);
}
    return (
        <div>
            
        </div>
    );
}

export default Array;