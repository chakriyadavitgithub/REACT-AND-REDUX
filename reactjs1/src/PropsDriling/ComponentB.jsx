import ComponentC from "./ComponentC"
let ComponentB=(props)=>{
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <ComponentC ename={props.ename}/>
    </div>
}
export default ComponentB;