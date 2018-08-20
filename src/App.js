import React, { Component} from "react";
import "./App.css";
class App extends Component{
render(){
return(
<div className="App">
<div className="container">
<div className="Top">
<img src='ironhack-logo.svg'/>
<h1> Say Hello to </h1>
<h1>ReactJS!!</h1> <img className="logo" src="react-logo.svg" alt=""/>
<p>You will learn a Frontend</p>
<p>framework from scratch, to</p>
<p>become a Ninja Developer</p>
<p></p>
<button>AWESOME!</button>
</div>
</div>
<section className="container">
<img src="/iconos.png" alt=""/>
</section>
</div>
);
}
}
export default App;