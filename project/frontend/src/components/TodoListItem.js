import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/todos";
import { Button } from "react-bootstrap";

export class TodoListItem extends React.Component {
  onReverse = () => {
    let tempTodo = {
      message: this.props.message,
      start_at: this.props.start_at,
      end_at: this.props.end_at,
      finish: !this.props.finish
    };
    this.props.reverseTodo(this.props.id, tempTodo);
  };

  formatPriority = priority => {
    switch (priority) {
      case 1:
        return "Low";
      case 2:
        return "Normal";
      case 3:
        return "High";
      case 4:
        return "Extreme";
      default:
        return "Unknown";
    }
  };
  render() {
    return (
      <tr>
        <td>
          <Link to={`/todo/${this.props.id}`}>{this.props.message}</Link>
        </td>
        <td>{this.props.start_at.substring(0, 10)}</td>
        <td>{this.props.end_at.substring(0, 10)}</td>
        <td>{this.formatPriority(this.props.priority)}</td>
        <td>{this.props.finish ? <p>finished</p> : <p>unfinish</p>}</td>
        <td>
          {this.props.finish ? (
            <Button onClick={this.onReverse}>Redo</Button>
          ) : (
            <Button onClick={this.onReverse}>Done</Button>
          )}
        </td>
      </tr>
      // <div>
      //   <Link to={`/todo/${this.props.id}`}>
      //     <h3>{this.props.message}</h3>
      //   </Link>
      //   <p>{this.props.start_at}</p>
      //   <p>{this.props.end_at}</p>
      //   <p>{this.props.priority}</p>
      //   {this.props.finish ? <p>finished</p> : <p>unfinish</p>}
      //   {this.props.finish ? (
      //     <button onClick={this.onReverse}>Redo</button>
      //   ) : (
      //     <button onClick={this.onReverse}>Done</button>
      //   )}
      // </div>
    );
  }
}

export default connect(
  null,
  actions
)(TodoListItem);

// const TodoListItem = ({ id, message, start_at, end_at, priority, finish }) => (
//   <div>
//     <Link to={`/todo/${id}`}>
//       <h3>{message}</h3>
//     </Link>
//     <p>{start_at}</p>
//     <p>{end_at}</p>
//     <p>{priority}</p>
//     {finish ? <p>finished</p> : <p>unfinish</p>}
//     {finish ? <button>Redo</button> : <button>Done</button>}
//   </div>
// );

// export default TodoListItem;
