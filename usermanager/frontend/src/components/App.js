import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import UserComponent from "./UserComponent/UserComponent"

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <UserComponent

                />
            </Fragment>
        );
    }
}



ReactDOM.render(<App />, document.getElementById("root"));