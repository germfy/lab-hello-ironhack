import React, {
  Component
} from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img src="ironhack-logo.svg" />
          <img src="menu-top.svg" />
        </div>
        <div className="header">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
        </div>
        <div className="subheader">
          <p>
            You Will Learn a Frontend
            <br />
            framework from scratch, to
            <br />
            became a Ninja Developer.
          </p>
        </div>
        <div className="button">
          <a
            className="waves-effect waves-light btn-large white black-text"
            href="#"
          >
            Awesome!
          </a>
        </div>
        <div className="image">
          <img src="react-benefits.png" alt="React Benefits" />
        </div>
      </div>
    );
  }
}
export default App;
