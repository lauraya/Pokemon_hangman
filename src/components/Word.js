import React from "react";

const Word = ({ pok, correct }) => {
  return (
    <div className="pokemon">
      {pok.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correct.includes(letter) ? letter : ""}
          </span>
        ); //On récupère la lettre si la lettre est correcte, sinon on ne récupère rien
      })}
    </div>
  );
};

export default Word;
