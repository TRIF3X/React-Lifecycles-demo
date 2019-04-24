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

  url =
    "https://cdn-images-1.medium.com/max/1600/1*u8hTumGAPQMYZIvfgQMfPA.jpeg";

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("componentWillMount");
  }

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
        <img src={this.url} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
