import React, { Component} from "react";
  import "./App.css";
  class App extends Component{
    render(){
      return(  
        <div className="App">
          <div className="slide">
            <div className="nav">
              <img className="logo"src="/ironhack-logo.svg"></img>
              <img className="menu" src="/menu-top.svg"></img>
            </div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <h1> Say hello to </h1>
              <h1> ReactJS </h1>
            </div>
            <div className="txt">
              <p>You will learn a Frontend</p>
              <p>framework from scratch, to</p>
              <p>become an Ninka Developer.</p>
            </div>
        <button>Awesome!</button>
        </div>
        <div className="footer">
          <ul className="flex-container wrap">
            <li>
              <img src="/Declarative.png"></img>
              <h2>Declarative</h2>
              <p className="txt-dark">React makes it painless to create interactive UIs.</p>
            </li>
            <li>
              <img src="/Components.png"></img>
              <h2>Components</h2>
              <p className="txt-dark">Build encapsulated components that manage their state.</p>
            </li>
            <li>
              <img src="/Single-way.png"></img>
              <h2>Sigle-Way</h2>
              <p className="txt-dark">A set of immutable values are passed to the component's.</p>
            </li>
            <li>
              <img src="/JSX.png"></img>
              <h2>JSX</h2>
              <p className="txt-dark">Statically-typed, designed to run on modern browsers.</p>
            </li>
        </ul>
      </div>
        </div>
); }
  }
  export default App;