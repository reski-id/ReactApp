import React, {Component} from "react";
import './App.css';

import HelloWorld from "./HelloWorld";

class App extends Component{
  render(){
    return(
      // <div className="warna">Hallo Semuanya</div>
      <div>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
      </div>
    )
  }
}

export default App;