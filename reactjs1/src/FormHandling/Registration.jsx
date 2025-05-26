import { useState } from "react"

let Registration=()=>{
    let[user,setUser]=useState({uname:"",mobile:"",email:""})
    //here we are didn't create the much handlers
    //we can use one handler and we can use the name attribute and on change
let updateHandler=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
}

let submitHandler=(event)=>{
    event.preventDefault();
    console.log(user)

}
    return <div>
          <pre>{JSON.stringify(user)}</pre>
          <form onSubmit={submitHandler}>
            Username:<input type="text" onChange={updateHandler} name="uname"/><br /> <br />
            MobileNum:<input type="number"onChange={updateHandler} name="mobile"/><br /> <br />
            EmailId:<input type="Email"onChange={updateHandler} name="email"/> <br /> <br />
            <input type="Submit" value= "Registration" />
        </form>
    </div>

}
export default Registration;