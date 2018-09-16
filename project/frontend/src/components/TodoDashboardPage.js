import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";

const TodoDashboardPage = () => (
  <div>
    <AddTodo />
    <TodoListFilters />
    <TodoList />
  </div>
);

export default TodoDashboardPage;
