import React from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.todo ? props.todo.message : "",
      priority: props.todo ? props.todo.priority : 1,
      start_at: props.todo ? moment(props.todo.start_at) : moment(),
      end_at: props.todo ? moment(props.todo.end_at) : moment(),
      calendarFocused: null,
      error: ""
    };
  }

  onMessageChange = e => {
    const message = e.target.value;
    this.setState(() => ({ message }));
  };

  onPriorityChange = e => {
    const priority = e.target.value;
    this.setState(() => ({ priority }));
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState(() => ({
      start_at: startDate,
      end_at: endDate
    }));
  };
  onFocusChange = focused => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.message || !this.state.priority) {
      this.setState(() => ({
        error: "Please provide your todo info and priority!"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        message: this.state.message,
        priority: parseInt(this.state.priority, 10),
        start_at:
          moment(this.state.start_at.valueOf()).format("YYYY-MM-DD") +
          "T00:00:00Z",
        end_at:
          moment(this.state.end_at.valueOf()).format("YYYY-MM-DD") +
          "T00:00:00Z"
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <select value={this.state.priority} onChange={this.onPriorityChange}>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
            <option value="4">Extreme</option>
          </select>

          <input
            type="text"
            autoFocus
            placeholder="Todo..."
            value={this.state.message}
            onChange={this.onMessageChange}
          />
          {/* <input
            type="text"
            placeholder="Priority"
            value={this.state.priority}
            onChange={this.onPriorityChange}
          /> */}
          <DateRangePicker
            startDate={this.state.start_at}
            startDateId="start_date_field"
            endDate={this.state.end_at}
            endDateId="end_date_field"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
          />
          <button>Add it!</button>
        </form>
      </div>
    );
  }
}
