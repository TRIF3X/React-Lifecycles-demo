import React, { Component } from "react";

import "./styles.css";

export default class Child extends Component {
  constructor() {
    super();
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child prevProps", prevProps);
    console.log("child prevState", prevState);
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log("child render");
    return <div className="App">child name: {this.props.name}</div>;
  }
}
