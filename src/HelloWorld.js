import React,  { Component } from "react";
import './App.css';

class HelloWorld extends Component{
    render(){
        return(
            <div>
            <div className="warna">Nama : {this.props.nama} <br></br> Nik : {this.props.nik}</div> 
            <div className="warna">Nik : {this.props.nik}</div> 
            </div>
            
        )
    }
}

export default HelloWorld;