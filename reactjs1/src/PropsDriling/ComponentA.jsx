import ComponentB from "./ComponentB";
let ComponentA=()=>{
        let ename="Chakri Yadav";
        return <div>
            <h2>Component A</h2>
<hr />
<ComponentB ename={ename}/>
        </div>
}

export default ComponentA;