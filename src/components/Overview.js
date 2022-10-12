import React from "react";

const Overview = (props) => {
  const { user } = props;

  return (
    <div>
      {user.map((user) => {
        return (
          <div key={user.id} className="cardDisplay">
            <h1>description</h1>
            <h2>User Info</h2>
            <h3>Name: </h3>
            <p>{user.name}</p>
            <h3>Last Name: </h3>
            <p>{user.lastName}</p>
            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
