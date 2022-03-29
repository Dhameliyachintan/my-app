import React, { PureComponent } from 'react';
import './App.css';

function App() {
        let data = 
        [
            {
              name: "amit",
              age: 35,
              salary: 40000,
              bonus: 1000,
              status: true
            },
            {
              name: "ajay",
              age: 25,
              salary: 38000,
              bonus: 2000,
              status: false
            },
            {
              name: "mayur",
              age: 23,
              salary: 50000,
              bonus: 500,
              status: true
            },
            {
              name: "jay",
              age: 29,
              salary: 35000,
              bonus: 700,
              status: true
            },
            {
              name: "raj",
              age: 33,
              salary: 22000,
              bonus: 2000,
              status: true
            },
          ];


        let filterdata = data.filter((d,i) => ( d.status === true))

        let total = filterdata.reduce((acc, d) => acc + d.salary + d.bonus,0)
        console.log(total);
        console.log(filterdata);
        return (
          <table border = "1px">
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
          <th>total</th>
          <th>total export</th>
        </tr>
          {
                    filterdata.map((d,i) => {
                        return(
                        <tr>
                        <td>{d.name}</td>
                        <td>{d.age}</td>
                        <td>{d.salary}</td>
                        <td>{d.bonus}</td>
                        <td>{d.status.toString()}</td>
                        <td>{d.salary+d.bonus}</td>
                        {i === 0 ? <td rowspan={filterdata.length}>{total}</td>:null}
                        </tr>
                        )
                    })
                }
            </table>
        );
    }


export default App;



