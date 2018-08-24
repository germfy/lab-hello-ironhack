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
        <div className="footer">
          <div className="row">
            <div className="card col-xs-12 col-sm-3">
              <img className="card-img-top" src="one.png" alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">Declarative</h5>
                <p className="card-text">React makes it</p>
                <p className="card-text">painless to create</p>
                <p className="card-text">interactive UIs</p>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-3">
              <img className="card-img-top" src="two.png" alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">Components</h5>
                <p className="card-text">Build encapsulated</p>
                <p className="card-text">components that</p>
                <p className="card-text">manage their state</p>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-3">
              <img className="card-img-top" src="tree.png" alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">Single-Way</h5>
                <p className="card-text">A set of immutable</p>
                <p className="card-text">values are passed to</p>
                <p className="card-text">the components</p>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-3">
              <img className="card-img-top" src="four.png" alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">JSX</h5>
                <p className="card-text">Statically-typed,</p>
                <p className="card-text">designed to run on</p>
                <p className="card-text">modern browsers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
