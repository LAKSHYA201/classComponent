import React, { Component } from "react";

import Count from "./count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Add coffee", "Buy tickets"],
      editingTodo: null,
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: [...state.todos, state.inputVal],
      inputVal: "",
    }));
  }

  handleDeleteTodo(todo) {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item !== todo),
    }));
  }

  handleEditTodo(todoIndex) {
    this.setState({
      editingTodo: todoIndex,
      inputVal: this.state.todos[todoIndex],
    });
  }

  handleEditSubmit(e) {
    e.preventDefault();
    const updatedTodos = [...this.state.todos];
    updatedTodos[this.state.editingTodo] = this.state.inputVal;
    this.setState({ todos: updatedTodos, editingTodo: null, inputVal: "" });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo} className="lol">
              {this.state.editingTodo === index ? (
                <form onSubmit={this.handleEditSubmit}>
                  <input
                    type="text"
                    value={this.state.inputVal}
                    onChange={this.handleInputChange}
                  />
                  <button type="submit">Resubmit</button>
                </form>
              ) : (
                <>
                  {todo}
                  <div>
                    <button onClick={() => this.handleDeleteTodo(todo)}>
                      Delete
                    </button>
                    <button onClick={() => this.handleEditTodo(index)}>
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
