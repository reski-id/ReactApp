import React, {Component} from "react";


class App extends Component{
  constructor(){
    super();
    this.state = {
      homestays : []
    }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
    .then(response => response.json())
    .then((data)=>{
      this.setState({
        homestays:data
      })
    })
  }

  render(){
    return(
      // <div className="warna">Hallo Semuanya</div>
      <div>
        {
          this.state.homestays.map((index,key) => 
            <div>
              <h3>{index.id}. {index.nama} Rp. {index.harga}rb</h3>
            </div>
              
            )
        }
      </div>
    )
  }
}
  
export default App;