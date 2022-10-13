import React from "react";

function hideCard() {
  let card = document.querySelector(".cardDisplay2");
  let formDisplay = document.querySelector(".userExperience");
  card.style.display = "none";
  formDisplay.style.display = "flex";
}

const Overview = (props) => {
  const { userExp } = props;
  return (
    <div>
      {userExp.map((userExp) => {
        return (
          <div key={userExp.id} className="cardDisplay2">
            <div className="edit">
              <h2>Educational Experience</h2>
              <button
                id="editExp"
                onClick={() => {
                  hideCard();
                }}
              >
                Editar
              </button>
            </div>
            <h3>School Name</h3>
            <p>{userExp.schoolName}</p>
            <h3>Title of Study</h3>
            <p>{userExp.titleOfStudy}</p>
            <h3>Date of Study</h3>
            <p>{userExp.dateOfStudy}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
