import "./App.css";
import { useEffect, useState } from "react";
import dice from "./icon-dice.svg";

function App() {
  const [number, setNumber] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const url = "https://api.adviceslip.com/advice";

  const advice = async function () {
    const response = await fetch(url);
    const data = await response.json();

    setNumber(data.slip.id);
    setText(data.slip.advice);
  };
  useEffect(() => {
    advice();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>ADVICE #{number} </h1>
        <p>"{text}"</p>
        <div className="border-line">
          <div className="line"></div>
          <div className="quote"></div>
          <div className="quote"></div>
          <div className="line"></div>
        </div>
        <div className="dice" onClick={advice}>
          <img src={dice} alt="dice"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
