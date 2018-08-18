import React, { Component} from "react";
import "./App.css";
import '../node_modules/materialize-css/dist/css/materialize.min.css';

class App extends Component{
render(){
return(
  <body className= "body">
    
    <div className= "App">
    <nav className ="nav">
      <img src="ironhack-logo.svg"/>
      <img src="menu-top.svg"/>
    </nav>
        <div className ="cuadro">
        <h1> Say hello to ReactJS </h1> <br></br>
        <p>You Will Learn a Frontend framework from scratch, to became a Ninja Developer </p>
        <a className= "waves-effect waves-light btn-large white black-text" href="#">Awesome!</a>
        </div>
        
   </div>
  </body>
    
  

);
}
}
export default App;
