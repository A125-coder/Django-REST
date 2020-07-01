import React from "react";
import UserItem from "./UserItem/UserItem";

const UserComponent = () => {
    return (
        <div>
            <div className="outer-container">
                <h1>Users Table</h1>
                <UserItem />
            </div>
        </div>
    )
}


export default UserComponent;