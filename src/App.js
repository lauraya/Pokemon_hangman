import "./App.css";
import Header from "./components/Header";
import Pendu from "./components/Pendu";
import Wrong from "./components/Wrong";
import Word from "./components/Word";
import React, { useEffect, useState } from "react";
import Message, { checkWin } from "./components/Message";
import Notification from "./components/Notification";
import { showNotif as show } from "./components/Notification";
const pokemon = require("pokemon");
let pok = pokemon.random("fr").toLowerCase();
pok.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function App() {
  const [play, setPlay] = useState(true);
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [showNotif, setshowNotif] = useState(false);
  console.log(play);
  console.log(wrong.length);
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
    document.location.reload();
    setPlay(true);
    setCorrect([]);
    setWrong([]);
    pok = pokemon.random("fr").toLowerCase();
    pok.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
      />
      <Notification showNotif={showNotif} />
    </div>
  );
}

export default App;