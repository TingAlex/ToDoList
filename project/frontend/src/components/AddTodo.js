import React from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import * as actions from "../actions/todos";

export class AddTodo extends React.Component {
  onSubmit = todo => {
    this.props.addTodo(todo);
  };
  render() {
    return (
      <div>
        {/* <h1>Add a ToDo~</h1> */}
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(AddTodo);
