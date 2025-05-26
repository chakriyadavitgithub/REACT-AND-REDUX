
let ComponentD=(props)=>{
    return <div>
        <h2>Component D</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employe Name:{props.ename}</h4>
    </div>
}

export default ComponentD;