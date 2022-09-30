import React from "react";

const Overview = (props) => {
  const { user } = props;

  return (
    <div>
      {user.map((user) => {
        return (
          <p key={user.id}>
            {user.name}, {user.lastName}, {user.id}
          </p>
        );
      })}
    </div>
  );
};

export default Overview;
