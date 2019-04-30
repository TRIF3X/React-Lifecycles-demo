import React, { Component } from "react";
import ReactDOM from "react-dom";

import Child from "./child.js";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "conner"
    };
    console.log("constructor");
  }

  url = "https://image.ibb.co/j8CzEd/lifecycle.jpg";

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeState = () => {
    this.setState({ name: "tim" });
  };

  unmountChild = () => {
    this.setState({ name: "robert" });
  };

  render() {
    console.log("render");
    if (this.state.name === "robert") {
      return <div>Empty div</div>;
    }
    return (
      <div className="App">
        <Child name={this.state.name} />
        <button onClick={this.changeState}>Change name</button>
        <button onClick={this.unmountChild}>unmountChild</button>
        <img
          alt="react lifecycle"
          src={this.url}
          style={{ width: 750 + "px" }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
