import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import selectTodos from "../selectors/todos";
import { Table } from "react-bootstrap";

export const TodoList = props => {
  return (
    <div>
      {/* <h1>TodoList</h1> */}
      <p>There is {props.todos.length} remains</p>
      {props.todos.length === 0 ? (
        <p>No Todos</p>
      ) : (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Start at</th>
              <th>Dead at</th>
              <th>Priority</th>
              <th>State</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.map(todo => (
              <TodoListItem {...todo} key={todo.id} />
            ))}
          </tbody>
        </Table>
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
        // <ol>
        //   {props.todos.map(todo => (
        //     <li key={todo.id}>
        //       <TodoListItem {...todo} />
        //     </li>
        //   ))}
        // </ol>