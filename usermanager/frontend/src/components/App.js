import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";

import User from "../components/UsersList/User";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <User />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
