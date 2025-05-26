import Axios from 'axios'
import {useEffect, useState } from 'react'
let Users=()=>{
    ///here by using the useeffect react hook 
    // and with out get handler and it will be work directly
    let [users,setUsers]=useState([])
    useEffect(()=>{

    //let getDataHandler=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
      return <div className='container'>
        <h3>Http Url</h3>
        <pre>{JSON.stringify(users)}</pre>
        {/* //<button onClick={getDataHandler}>Get Data</button> */}
        <div className='row'>
        <div className='col-4'>
            <table className='table'>
        <thead>
                    <tr>
                        <th>User Id:</th>
                        <th>User Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                {
               users.length>0 ? 
                <>
                {
                    users.map((user)=>{
                        return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.address.city}</td>
                              </tr>
                    })
                }
                </>:<h4>No Data</h4>
               }
                </tbody>
            </table>

            </div>

        </div>
    </div> 

 
}  
export default Users;
        
    