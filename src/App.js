import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="General">
        <div className="container">
          <div className="first">
            <div className="Menu row">
              <div className="col-sm-1" />
              <div className="col-sm-2">
                <img src="ironhack-logo.svg" alt="" />
              </div>
              <div className="col-sm-7" />
              <div className="col-sm-1">
                <img src="menu-top.svg" alt="" />
              </div>
            </div>
            <div className="Title row">
              <div clasName="col-sm-5">
                <h1>Say hello to</h1>
                <h1>ReactJS </h1>
              </div>
            </div>
            <div className="Subtitle row">
              <div className="col-sm-2">
                <p>
                  You will learn a Frontend framework from scratch, to become an
                  Ninka Developer.
                </p>
              </div>
            </div>
            <div className="ButtonAwesome row">
              <a className="btn btn-light">Awesome!</a>
            </div>
          </div>
          </div>
          <div className="Foot">
          <img src="foot.png" alt="" />
        
        </div>
        
        
      </div>
    );
  }
}
export default App;
