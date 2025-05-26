import { useState } from "react";

let Employe=()=>{
let [esal,setEsal]=useState('40000')
let hikeHandler=(hikeValue)=>{
    setEsal(esal+hikeValue)
}
return <div style={{display:"flex",columnGap:"30px"}}>
    <h3>Employee Component</h3>
    <h2>Employee Salary:{esal}</h2>

    <button onClick={hikeHandler.bind(null,10000)}>Hike 10k</button>
    <button onClick={hikeHandler.bind(null,20000)}>Hike 20k</button>
    <button onClick={hikeHandler.bind(null,35000)}>Hike 35k</button>
    <button onClick={hikeHandler.bind(null,0)}>Hike 0</button>
 


</div>
}
export default Employe;