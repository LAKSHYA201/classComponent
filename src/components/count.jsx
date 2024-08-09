import React, { Component } from "react";
export default class Count extends Component {
  render() {
    let todos = this.props.todos;
    return <h2>Count : {todos.length}</h2>;
  }
}
