import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/filters";

export class TodoListFilters extends React.Component {
  onSortChange = e => {
    switch (e.target.value) {
      case "all":
        this.props.pickByAll();
        break;
      case "finished":
        this.props.pickByFinished();
        break;
      case "unfinish":
        this.props.pickByUnfinish();
        break;
      case "priority":
        this.props.sortByPriority();
        break;
      case "end_date":
        this.props.sortByEndDate();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <select value={this.props.filters.pickBy} onChange={this.onSortChange}>
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="unfinish">Unfinish</option>
        </select>

        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="priority">Priority</option>
          <option value="end_date">End date</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(
  mapStateToProps,
  actions
)(TodoListFilters);
