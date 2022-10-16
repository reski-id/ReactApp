import React, {Component} from "react";
import axios from "axios";


class App extends Component{
  constructor(){
    super();
    this.state = {
      homestays : []
    }
  }

  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
    .then(res => {
      const homestays = res.data;
      this.setState({homestays});
    });
  }

  render(){
    return(
      <div>
        {
          this.state.homestays.map((index) => 
            <div>
              <h3 key={index.id}>{index.id}. {index.nama} Rp. {index.harga}rb</h3>
            </div>
              
            )
        }
      </div>
    )
  }
}

export default App;