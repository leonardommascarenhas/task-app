import React from "react";

const Overview = (props) => {
  const { userExp } = props;
  return (
    <div>
      {userExp.map((userExp) => {
        return (
          <div key={userExp.id}>
            <h2>Educational Experience</h2>
            <h3>schoolName</h3>
            <p>{userExp.schoolName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
