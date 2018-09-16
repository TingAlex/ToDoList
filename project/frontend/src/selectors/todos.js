const getVisibleTodos = (todos, { sortBy, pickBy }) => {
  let tempTodo;
  switch (pickBy) {
    case "all":
      tempTodo = todos.filter(todo => {
        return true;
      });
      break;
    case "unfinish":
      tempTodo = todos.filter(todo => {
        return todo.finish === false;
      });
      break;
    case "finished":
      tempTodo = todos.filter(todo => {
        return todo.finish === true;
      });
      break;
    default:
    console.log("sort for default");
      tempTodo = todos.filter(todo => {
        return true;
      });
      break;
  }
  return tempTodo.sort((a, b) => {
    if (sortBy === "priority") {
      return a.priority < b.priority;
    } else if (sortBy === "end_date") {
      return a.end_at < b.end_at;
    }
  });
};

export default getVisibleTodos;
