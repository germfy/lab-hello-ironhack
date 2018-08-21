import React, {Component} from "react";
import "./App.css";
class App extends Component{
 render(){
    return(
    <div className="App">
    <div className="logo">
      <img 
        src="ironhack-logo.svg" 
        alt="triangle with all three sides equal"/>
    </div>
 <h1>Say hello to</h1>
 <h2>ReactJs</h2>
   
    <p>"You will learn a Frontend</p>
    <p>framework from scratch, to</p>
    <p>becaome an Ninka Developer."</p>
    <button>Awesome!</button>
<div className="menu">
<img 
    src="menu-top.svg" 
    alt="triangle with all three sides equal"/>
</div>
<div className="react">
    <img 
    src="react-logo.svg" 
    alt="triangle with all three sides equal"/>
</div>
    </div>
    );
   }
}
export default App;
