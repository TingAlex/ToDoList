import axios from "axios";
import moment from "moment";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const fetchTodos = () => async dispatch => {
  const res = await axios.get("/api/todo/");
  dispatch({
    type: "FETCH_TODOS_LIST",
    todos: res.data
  });
};

export const addTodo = ({
  message = "",
  priority = 1,
  start_at = 0,
  end_at = 0,
  finish = false
} = {}) => async dispatch => {
  const res = await axios.post("/api/todo/", {
    message,
    priority,
    start_at,
    end_at,
    finish
  });
  if (res.data) {
    dispatch({
      type: "ADD_TODO",
      todo: {
        id: res.data.id,
        message,
        priority,
        start_at,
        end_at,
        finish
      }
    });
  } else {
    alert("network error!");
  }
};

export const removeTodo = id => async dispatch => {
  const res = await axios.delete("/api/todo/" + id);
  if (res.data) {
    dispatch({
      type: "REMOVE_TODO",
      id
    });
  } else {
    alert("network error!");
  }
};

export const editTodo = (id, updates) => async dispatch => {
  const res = await axios.put("/api/todo/" + id, updates);
  if (res.data) {
    dispatch({
      type: "EDIT_TODO",
      id,
      updates
    });
  } else {
    alert("network error!");
  }
};

//this is used to change todo's finish state.
export const reverseTodo = (id, updates) => async dispatch => {
  const res = await axios.put("/api/todo/" + id, updates);
  if (res.data) {
    dispatch({
      type: "REVERSE_TODO",
      id,
      updates
    });
  } else {
    alert("network error!");
  }
};
