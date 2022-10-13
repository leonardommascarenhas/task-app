import React from "react";

function hideForm() {
  let card = document.querySelector(".cardDisplay");
  card.style.display = "none";
}

const Overview = (props) => {
  const { user } = props;

  return (
    <>
      {user.map((user) => {
        return (
          <div key={user.id} className="cardDisplay">
            <div className="edit">
              <h2>User Info</h2>
              <button id="edit" onClick={hideForm}>
                Editar
              </button>
            </div>
            <h3>Name: </h3>
            <p>{user.name}</p>
            <h3>Last Name: </h3>
            <p>{user.lastName}</p>
            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Overview;
