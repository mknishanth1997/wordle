import { useState } from "react";
import { InputField } from "../Input-Field/InputField";
import { WordleGrid } from "../WordleGrid/wordle-grid";
import "./Wordle.css";

export function Wordle() {
  const [screenIndex, setScreenIndex] = useState(0); // 0 = game, 1 = fail, 2 = success
  const [currentRound, setCurrentRound] = useState(0);
  const [winningRowIndex, setWinningRowIndex] = useState(null);

  const [gameBoard, SetGameBoard] = useState([
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ]);

  const [gameWon, setGameWon] = useState(false);
  if (gameWon) {
    setScreenIndex(1);
    setGameWon(false);
  }
  let answer = [
    { letter: "a", position: 1 },
    { letter: "p", position: 2 },
    { letter: "p", position: 3 },
    { letter: "l", position: 4 },
    { letter: "e", position: 5 },
  ];
  let answerString = "apple";
  let screen = [
    <GameScreen
      gameBoard={gameBoard}
      SetGameBoard={SetGameBoard}
      currentRound={currentRound}
      setCurrentRound={setCurrentRound}
      answer={answer}
      gameWon={gameWon}
      setGameWon={setGameWon}
      setScreenIndex={setScreenIndex}
      winningRowIndex={winningRowIndex}
      setWinningRowIndex={setWinningRowIndex}
    />,
    <FailureScreen answer={answerString}></FailureScreen>,
    <SucessScreen answer={answerString}></SucessScreen>,
  ];

  return (
    <>
      {/* <div>
        <h1>Wordle</h1>
        <WordleGrid fullArray={gameBoard}></WordleGrid>
        <InputField
          gameBoard={gameBoard}
          SetGameBoard={SetGameBoard}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          answer={answer}
          gameWon={gameWon}
          setGameWon={setGameWon}
        ></InputField>
      </div> */}
      {screen[screenIndex]}
    </>
  );
}

function GameScreen({
  gameBoard,
  SetGameBoard,
  currentRound,
  setCurrentRound,
  answer,
  gameWon,
  setGameWon,
  setScreenIndex,
  setWinningRowIndex,
  winningRowIndex,
}) {
  return (
    <>
      <div>
        <h1>Wordle</h1>
        <WordleGrid
          fullArray={gameBoard}
          winningRowIndex={winningRowIndex}
          setWinningRowIndex={setWinningRowIndex}
        ></WordleGrid>
        <InputField
          gameBoard={gameBoard}
          SetGameBoard={SetGameBoard}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          answer={answer}
          gameWon={gameWon}
          setGameWon={setGameWon}
          setScreenIndex={setScreenIndex}
          setWinningRowIndex={setWinningRowIndex}
        ></InputField>
      </div>
    </>
  );
}

function FailureScreen({ answer }) {
  return (
    <div className="result-screen failure">
      <h1 className="result-title">💀 You Lost 💀</h1>
      <p className="result-subtitle">Better luck next time!</p>
      <h2 className="answer-word">{answer.toUpperCase()}</h2>
      <p className="emoji-burst">🟥🟥🟥🟥🟥</p>
    </div>
  );
}
function SucessScreen({ answer }) {
  return (
    <div className="result-screen success">
      <h1 className="result-title">🎉 You Won! 🎉</h1>
      <p className="result-subtitle">The word was:</p>
      <h2 className="answer-word">{answer.toUpperCase()}</h2>
      <p className="emoji-burst">🟩🟩🟩🟩🟩</p>
    </div>
  );
}
