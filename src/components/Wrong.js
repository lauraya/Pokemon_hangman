import React from "react";

const Wrong = ({ wrong }) => {
  return (
    <div className="wrong-container">
      {wrong.length > 0 && <p>Faux</p>}
      {wrong.map((letter, index) => (
        <span key={index}>{letter} </span>
      ))}
    </div>
  );
};

export default Wrong;
