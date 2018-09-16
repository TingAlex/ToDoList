import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import { Grid } from "react-bootstrap";

const TodoDashboardPage = () => (
  <Grid>
    <AddTodo />
    <br/>
    <TodoListFilters />
    <br/>
    <TodoList />
  </Grid>
);

export default TodoDashboardPage;
