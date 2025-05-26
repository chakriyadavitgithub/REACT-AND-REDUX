import ComponentD from "./ComponentD";
let ComponentC=(props)=>{
    return <div>
        <h2>Component C</h2>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <ComponentD ename={props.ename}/>
    </div>
}

export default ComponentC;