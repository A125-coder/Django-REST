import React, { Fragment } from "react";

//Component
import UserItem from "./UserItem/userItem";

const UsersList = ({ UsersList, onDeleteItem }) => {
  const item = UsersList.map((item) => {
    // console.log("Item => ", item);
    return (
      <UserItem
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        message={item.message}
        created_at={item.created_at}
        onDeleteItem={() => onDeleteItem(item.id)}
      />
    );
  });
  return (
    <Fragment>
      <div className="outer-container">
        <h1>User Manager Table</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          {item}
        </table>
      </div>
    </Fragment>
  );
};
export default UsersList;
