import { useState } from "react";

let Message=()=>{
    let [msg,setMsg]=useState("Hello Babe");

    let gmHandler=()=>{
        setMsg("Good morning")
    }

    let gaHandler=()=>{
        setMsg("Good Afternoon")
    }
    return <div>
        <h1>Message Component</h1>
        <hr />
        <h3>Message value:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
    </div>
}
export default Message;