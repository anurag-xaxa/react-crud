import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./index.css";
import '../Style/DisplayData.css';


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
      <div className='register'>
        <Link className='reg-heading' to={'/register'} >
          New Registration 
        </Link>
      </div>
      <div className='register'>
        <Link className='reg-heading' to={'/login'} >
          Login 
        </Link>
      </div>
      <div className='table-container'>
      <h1>All Users Data</h1>
      <table className='data-table'>
      <thead>
        <tr>
          <th scope="col">UserId</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th colSpan={2} scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((eachData) => {
        return (
    
        <tr key={eachData.id}>
          <td scope="row"> {eachData.id} </td>
          <td>{eachData.name}</td>
          <td> {eachData.email} </td>
          <td>
            <Link to={`/update/${eachData.id}`}>
              <button type="button" className="edit-button btn btn-primary">
                Edit
                </button>
                </Link>
          </td>
         {/* <td><button className='edit-button' ><Link to={`/update/${eachData.id}`}>Edit</Link></button></td>  */}
         {/* <td className='delete-button'><button onClick= {() => deleteUser(eachData.id) } >Delete</button></td>   */}
          <td><button type="button" className="delete-button btn btn-danger" onClick= {() => deleteUser(eachData.id) } >Delete</button></td>
        </tr>
        )
      })
    }
    </tbody>
</table> </div>   
</div>
    </>
  );
};

export default DisplayData;
