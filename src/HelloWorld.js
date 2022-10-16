import React,  { Component } from "react";
import './App.css';

class HelloWorld extends Component{
    constructor (props){
        super(props);
        this.state={
            salam: "hai, dari state"
        };
    }

    salamkan=()=>{
        this.setState({
            salam:"Hello dari set state,"
        })
    }
    render(){
        return(
            <div>
            <div className="warna">
                {this.state.salam}
            <br/>
            <button onClick={this.salamkan}>Say Hello

            </button>
                </div> 
            </div>
            
        )
    }
}

export default HelloWorld;