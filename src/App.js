import React, {Component} from "react";


class App extends Component{
  constructor(){
    super();
    this.state = {
      siswa : [
        {
          id:12,
          nama:"Reski",
        },
        {
          id:13,
          nama:"Ahmad",
        }
      ]
    }
  }


  render(){
    return(
      // <div className="warna">Hallo Semuanya</div>
      <div>
        {
          this.state.siswa.map((index,key) => 
            <div>
              <h3>{index.id}. {index.nama}</h3>
            </div>
              
            )
        }
      </div>
    )
  }
}
  
export default App;