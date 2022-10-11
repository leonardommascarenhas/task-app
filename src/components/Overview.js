import React from "react";

const Overview = (props) => {
  const { user } = props;

  return (
    <div>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p> <p>{user.lastName}</p> <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
