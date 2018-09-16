import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoDashboardPage from "../components/TodoDashboardPage";
import Header from "../components/Header";
import EditTodoPage from "../components/EditTodoPage";
import * as actions from "../actions/todos";

//TODO: NotFound page!

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <br />
          <Switch>
              <Route exact path="/" component={TodoDashboardPage} />
              <Route path="/todo/:id" component={EditTodoPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(AppRouter);
