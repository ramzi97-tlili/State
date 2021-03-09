import './App.css';
import React from "react";



class App extends React.Component {
  person=[
   ' Ramzi Tlili',
    'Im Ramzi Tlili from Sidi Bouzid study in GOMYCODE Sfax',
    'Etudiant',
    <img src = "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>
  ] 
  state={
    time:0,
    isShown:false
  }
 
 
  showProfile=()=>{
    this.setState({
      isShown:!this.state.isShown

    })
  }

  componentDidMount(){
 setInterval(() => {
  this.setState ({time :this.state.time +1})
},1000);
}


  render() {
    return (
    <div>
      <div style={{margin:'auto',textAlign:'center'}}><button onClick={()=>this.showProfile()}   style={{align:'center'}}>
      { this.state.isShown ? "hide": "show"      }
      
      </button></div>
      {this.state.isShown ?
      
    
      (
      <ul >
        <h1>{this.state.time}</h1>
        {this.person.map((profil,i)=>(<li key={i} style={{backgroundColor:'white',listStyleType:'none',textAlign:'center',color:'blue'}}>{profil}</li>))}
      </ul>):(<h4 style={{textAlign:'center'}}>click button to show Profile</h4>)

      }
      
    </div>
      );
  }
}

export default App;
