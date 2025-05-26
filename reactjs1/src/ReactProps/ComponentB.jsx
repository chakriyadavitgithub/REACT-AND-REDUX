let ComponentB =(props)=>{

    return <div>
        <h1>Component B</h1>
        <h3>{JSON.stringify(props)}</h3>
        <h3>EMP_ID:{props.eid}</h3>
        <h4> EMP_Name:{props.ename}</h4>
        <h4> Primary Emp_Loc:{props.Location[1]}</h4>

    </div>

}

export default ComponentB;