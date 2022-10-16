import React, {Component} from "react";
import './App.css';

import HelloWorld from "./HelloWorld";

class App extends Component{
  render(){
    return(
      // <div className="warna">Hallo Semuanya</div>
      <div>
        <HelloWorld nama="Reski" nik="12121"/>
        <HelloWorld nama="Ahmad" nik="11111"/>
        <HelloWorld nama="Jhon" nik="23233"/>
        <HelloWorld nama="Wick" nik="45454"/>
      </div>
    )
  }
}

export default App;