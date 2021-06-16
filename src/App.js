import "./App.css";
import Header from "./components/Header";
import Pendu from "./components/Pendu";
import Wrong from "./components/Wrong";
import Word from "./components/Word";
import Score from "./components/Score";
import React, { useEffect, useState } from "react";
import Message, { checkWin } from "./components/Message";
import Notification from "./components/Notification";
import { showNotif as show } from "./components/Notification";
const pokemon = require("pokemon");

function App() {
  const [pok, setPok] = useState(
    pokemon
      .random("fr")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  );
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [play, setPlay] = useState(true);
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [showNotif, setshowNotif] = useState(false);
  console.log("win: ", win, "loss: ", loss);
  console.log("correct: ", correct);
  console.log(pok);
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (pok.includes(letter)) {
          if (!correct.includes(letter)) {
            setCorrect((letters) => [...letters, letter]);
          } else {
            show(setshowNotif);
          }
        } else {
          if (!wrong.includes(letter)) {
            setWrong((letters) => [...letters, letter]);
          } else {
            show(setshowNotif);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correct, wrong, play]);

  function again() {
    setPok(
      pokemon
        .random("fr")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
    setPlay(true);
    setCorrect([]);
    setWrong([]);
    /*
    if (checkWin(correct, wrong, pok) == "gagné") {
      setWin(win + 1);
    } else if (checkWin(correct, wrong, pok) == "perdu") {
      setLoss(loss + 1);
    }*/
  }
  return (
    <div>
      <Header />

      <>
        <Pendu wrong={wrong} />
        <Wrong wrong={wrong} />
        <Word pok={pok} correct={correct} />
      </>

      <Message
        correct={correct}
        wrong={wrong}
        pok={pok}
        setPlay={setPlay}
        again={again}
        setWin={setWin}
        setLoss={setLoss}
        win={win}
        loss={loss}
      />
      <Notification showNotif={showNotif} />
    </div>
  );
}

export default App;
