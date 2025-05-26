import { useState } from "react"

let Login=()=>{
    let[user,setUser]=useState({"email":"","password":""})
    let emailHandler=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        //with out Spreadoperator also we can write manually
        ///setUser({ email: event.target.value, password: user.password });
         setUser({...user,email:event.target.value})///with spread operator
    }
    let psdHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=()=>{
        //send data to  backend or Api
        console.log(user)
        alert(JSON.stringify(user))
    }

    return <div>
        <pre>{JSON.stringify(user)}</pre>
        <h4>Login Details</h4>
        <form onSubmit={submitHandler}>
            EmailId:<input type="text" onInput={emailHandler}/> <br /> <br />
            Password:<input type="password" onInput={psdHandler}/> <br /> <br />
        </form>
    </div>
}

export default Login;