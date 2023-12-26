import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./index.css"

const DisplayData = () => {
  const [data, setData] = useState([]);
 
  function getData(){
   axios.get(`http://localhost:5000/users`)
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
      // console.log(response)
    }
      useEffect(() => {
        getData()
    }, []);

    const deleteUser = (id) => {
      axios.delete(`http://localhost:5000/users/${id}`)  
        .then(() => {  
          getData()
        })       
    };

  return (
    <>
    <div>
      
      <h1>Data from API:</h1>
      <div><Link to={'/register'}>New User</Link></div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      {
        data.map((eachData) => {
        return (
    
      <tbody>
        <tr>
          <th scope="row"> {eachData.id} </th>
          <td>{eachData.name}</td>
          <td> {eachData.email} </td>
          
         <td> <button ><Link to={`/update/${eachData.id}`}>Edit</Link></button> 
          <button onClick= {() => deleteUser(eachData.id) } >Delete</button></td>
          
        </tr>
      
      </tbody>
        )
      })
    }
</table>    


    </div>
    </>
  );
};

export default DisplayData;
