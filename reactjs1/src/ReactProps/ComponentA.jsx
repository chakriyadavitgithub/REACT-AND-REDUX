import ComponentB from './ComponentB'
let ComponentA=()=>{
    let uid=206;
    let uname="Chakri"
    let eloc=["Sullurpeta","Nellore","Hyderabad"]

    return <div>
        <h1>Component A</h1>
        <hr />
       {/* // <ComponentB one={1} two={2}/> */}
        <ComponentB eid={uid} ename={uname} Location={eloc}/>
    </div>
}
export default ComponentA;