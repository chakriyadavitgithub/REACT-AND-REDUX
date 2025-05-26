import { useState } from "react";
//here not using the any handlers and we can write this method also
let Messagetwo=()=>{
    let [val,setVal]=useState('Hi Jack');

    let GM=()=>{
        setVal("Good Morning")
    }
    let GA=()=>{
        setVal("Good Afternoon")
    }
    let GE=()=>{
        setVal("Good Evening")
    }
    let GN=()=>{
        setVal("Good Night")
    }
    return <div>
        <h1>{val}</h1>
        <div style={{display:"flex",columnGap:"50px"}}>

            <button onClick={GM}>GM</button>
            <button onClick={GA}>GA</button>
            <button onClick={GE}>GE</button>
            <button onClick={GN}>GN</button>
        </div>
    </div>
}

export default Messagetwo;