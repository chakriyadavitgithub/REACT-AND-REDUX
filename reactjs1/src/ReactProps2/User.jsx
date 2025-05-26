import Employe from "./Employe";
let User=()=>{

    let user_Data={
        uid:206,
        uname:"Chakri",
        loc:['Nellore','Bangalore'],
        email:"chakriyadav163@gmail.com"

    }

    return <div>
        <h3>User Component</h3>
        <hr />
         <Employe emp={user_Data}/>
    </div>
}
export default User;