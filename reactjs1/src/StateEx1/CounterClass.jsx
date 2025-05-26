import React from "react";

class CounterClass extends React.Component{

    state={
        counter:1
    }
    incrHandler=()=>{

        this.setState({counter:this.state.counter+1})
    }
    decrHandler =()=>{
        this.setState({counter:this.state.counter-1})
    }
    render(){
        return (
        <div>
            <h4>Counter Class Exampke</h4>
            <button onClick={this.decrHandler}>Decrement</button>
            <span> Counter Value:{this.state.counter}</span>
            <button onClick={this.incrHandler}>Increment</button>
        </div>
        );
    }
}

export default CounterClass;