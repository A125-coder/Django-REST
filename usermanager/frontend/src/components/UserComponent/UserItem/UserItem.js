import React, { Component, Fragment } from "react";


class UserItem extends Component {
    // state = {
    //     id: this.props.id,
    //     name: this.props.name,
    //     email: this.props.email,
    //     message: this.props.message,
    // };
    render() {
        // const { id, name, email, message } = this.state;
        return (
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="priority-200">
                            <td className="name">1</td>
                            <td className="clicks">Ann</td>
                            <td className="priority">Ann@gmail.com</td>
                            <td className="impressions">Hello</td>
                            <td className="delete"><button className="delete-btn"><i className="fas fa-trash-alt" title="delete row"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default UserItem;