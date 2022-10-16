import React, {Component} from "react";

import HelloWorld from "./HelloWorld";

class App extends Component{
  constructor(){
    super();
    this.state = {
      data : ""
    }
  }

  handleChange=(event)=>{
this.setState({
  data: event.target.value
})
  }
  render(){
    return(
      // <div className="warna">Hallo Semuanya</div>
      <div>
        <input type ="text" onChange={this.handleChange}/>
        <h3>{this.state.data}</h3>
      </div>
    )
  }
}
  
export default App;