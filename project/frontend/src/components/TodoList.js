import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import selectTodos from "../selectors/todos";

export const TodoList = props => {
  return (
    <div>
      <h1>TodoList</h1>
      <h1>{props.todos.length}</h1>
      {props.todos.length === 0 ? (
        <p>No Todos</p>
      ) : (
        <ol>
          {props.todos.map(todo => (
            <li key={todo.id}>
              <TodoListItem {...todo} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: selectTodos(state.todos, state.filters)
  };
};

export default connect(mapStateToProps)(TodoList);
