import React, { useEffect } from "react";

function checkWin(correct, wrong, word) {
  console.log(status);
  let status = "gagné";
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  if (wrong.length == 9) {
    status = "perdu";
  }
  return status;
}

export function Message({ correct, wrong, pok, setPlay, again }) {
  let message = "";
  let wordReveal = "";
  let play = true;

  if (checkWin(correct, wrong, pok) == "gagné") {
    message = "Félicitations, vous avez gagné!";
  } else if (checkWin(correct, wrong, pok) == "perdu") {
    message = "Vous avez perdu";
    wordReveal = "le mot était " + pok;

    play = false;
  }

  useEffect(() => {
    setPlay(play);
  });

  return (
    <div className="msg-container" style={play ? {} : { display: "flex" }}>
      <div className="message">
        <h2>{message}</h2>
        <h3>{wordReveal}</h3>
        <button onClick={again}>Rejouer</button>
      </div>
    </div>
  );
}

export default Message;
