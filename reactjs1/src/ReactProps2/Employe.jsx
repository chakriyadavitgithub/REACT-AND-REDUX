import React from "react";
class Employe extends React.Component{
    render(){

        return <div>
            <h3>Employe Component</h3>

            <h3>{JSON.stringify(this.props)}</h3>
            <h4>Employe Id:{this.props.emp.uid}</h4>
            <h4>Employe Name:{this.props.emp.uname}</h4>
            <h4>Employe Loc:{this.props.emp.loc[1]}</h4>
            <h4>Employe Email:{this.props.emp.email}</h4>
        </div>
    }
}
export default Employe;