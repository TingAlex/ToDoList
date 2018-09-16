import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import * as actions from "../actions/todos";

export class EditTodoPage extends React.Component {
  onSubmit = todo => {
    this.props.editTodo(this.props.todo.id, todo);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removeTodo(this.props.todo.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <TodoForm todo={this.props.todo} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let tempTodo = state.todos.find(todo => {
    return todo.id.toString() === props.match.params.id.toString();
  });
  // console.log("the params id " + props.match.params.id);
  // console.log("the todo id " + tempTodo.id);
  return { todo: tempTodo };
};

export default connect(
  mapStateToProps,
  actions
)(EditTodoPage);
