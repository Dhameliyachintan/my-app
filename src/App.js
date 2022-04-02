import React, {
  PureComponent
} from 'react';
import './App.css';

// function App() {
//         let data = 
//         [
//             {
//               name: "amit",
//               age: 35,
//               salary: 40000,
//               bonus: 1000,
//               status: true
//             },
//             {
//               name: "ajay",
//               age: 25,
//               salary: 38000,
//               bonus: 2000,
//               status: false
//             },
//             {
//               name: "mayur",
//               age: 23,
//               salary: 50000,
//               bonus: 500,
//               status: true
//             },
//             {
//               name: "jay",
//               age: 29,
//               salary: 35000,
//               bonus: 700,
//               status: true
//             },
//             {
//               name: "raj",
//               age: 33,
//               salary: 22000,
//               bonus: 2000,
//               status: true
//             },
//           ];


//         let filterdata = data.filter((d,i) => (d.status === true))

//         let total = filterdata.reduce((acc, d) => acc + d.salary + d.bonus,0)
//         console.log(total);
//         console.log(filterdata);
//         return (
//           <table border = "1px">
//         <tr>
//           <th>Name</th>
//           <th>age</th>
//           <th>salary</th>
//           <th>bonus</th>
//           <th>status</th>
//           <th>total</th>
//           <th>total export</th>
//         </tr>
//           {
//                     filterdata.map((d,i) => {
//                         return(
//                         <tr>
//                         <td>{d.name}</td>
//                         <td>{d.age}</td>
//                         <td>{d.salary}</td>
//                         <td>{d.bonus}</td>
//                         <td>{d.status.toString()}</td>
//                         <td>{d.salary+d.bonus}</td>
//                         {i === 0 ? <td rowspan={filterdata.length}>{total}</td>:null}
//                         </tr>
//                         )
//                     })
//                 }
//             </table>
//         );
//     }


// export default App;

// ======medicine ======//
 function App() {
  let data = [     {
       id: 101,
       name: 'Abacavir',
       quantity: 25,
       price: 150,
       expiry: 2022,
       status: true
     },
     {
       id: 102,
       name: 'Eltrombopag',
       quantity: 90,
       price: 550,
       expiry: 2021,
       status: true
     },
     {
       id: 103,
       name: 'Meloxicam',
       quantity: 85,
       price: 450,
       expiry: 2025,
       status: false
     },
     {
       id: 104,
       name: 'Allopurinol',
       quantity: 50,
       price: 600,
       expiry: 2023,
       status: true
     },
     {
       id: 105,
       name: 'Phenytoin',
       quantity: 63,
       price: 250,
       expiry: 2021,
       status: false
     }
   ];


        let filterdata = data.filter((d,i) => (d.status === true))

        let total = filterdata.reduce((acc, d) => acc + d.price,0)
        console.log(total);
        console.log(filterdata);
        return (
          <>

          <table align="center" border = "2px" cellPadding="30px">
        <tr align="center">
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Total</th>
          <th>Total Export</th>
        </tr>
          {
                    filterdata.map((d,i) => {
                        return(
                        <tr align="center">
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.quantity}</td>
                        <td>{d.price}</td>
                        <td>{d.expiry}</td>
                        <td>{d.status.toString()}</td>
                        <td>{d.quantity+d.price}</td>
                        {i === 0 ? <td rowspan={filterdata.length}>{total}</td>:null}
                        </tr>
                        )
                    })
                }
            </table>
            </>
        );
    }
export default App;


//------------------Array---------------------//
// function App() {

//    let arr1 =[10,20,30];
//       let arr2 =[10,20];
      
//       {/* //copyarry */}
//       let arr3 = [...arr1];
//       console.log(arr3);

//       {/* //concate */}
//       let arr4 = [...arr1,...arr2];
//       console.log(arr4);

//       {/* //mergine */}
//       let arr5 = [99,...arr4,100];
//       console.log(arr5);

//       {/* //destructuring */}
//       let arr6 = ['Amit',"Mayur"];
//       let[fname,lname] = arr6;
//       console.log(arr6[0]);
//       console.log(fname);
//       console.log(lname);
// }

// export default App;
