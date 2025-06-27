import { useState } from "react";
import "./inputField.css";
import { checkWinner } from "../Buisness-Logic/CheckWinner";

export function InputField({
  gameBoard,
  SetGameBoard,
  currentRound,
  setCurrentRound,
  answer,
  gameWon,
  setGameWon,
  setScreenIndex,
  setWinningRowIndex,
}) {
  const [input, setInput] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          // Prevent Default
          e.preventDefault();
          // If User Input is Submitted, proceed
          if (submitTheForm(input)) {
            //
            let formattedINput = setTheINput(input);
            setCurrentRound((prev) => prev + 1);
            //
            let gameAnswer = checkWinner(formattedINput, answer);
            //
            SetGameBoard((prev) => {
              const updated = [...prev];
              // Use currentRound to update the correct row
              updated[currentRound] = gameAnswer;
              return updated;
            });

            // Checks if ans has 5[true]
            let chickenDinner = gameAnswer
              .map((ans) => {
                if (ans.status === "correct") {
                  return true;
                } else {
                  return false;
                }
              })
              .reduce((a, c) => {
                a[c] = (a[c] || 0) + 1;
                return a;
              }, {});

            if (chickenDinner.true === 5) {
              console.log("Game Won");
              setWinningRowIndex(currentRound);
              setTimeout(() => {
                setScreenIndex(2);
              }, 2000);
            } else {
              console.log("Game not won");
            }
            console.log(chickenDinner);

            setInput("");
            if (currentRound + 1 === 6) {
              setInputDisabled(true);
              setTimeout(() => {
                setGameWon(true);
              }, 2000);
            }
          }
        }}
      >
        <label htmlFor="guess-field">Guess: </label>
        <input
          disabled={inputDisabled}
          required
          minLength={5}
          maxLength={5}
          placeholder="Type the 5 letter word"
          type="text"
          id="guess-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

// Helper Function:
function isAlphabetOnly(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function submitTheForm(input) {
  if (isAlphabetOnly(input)) {
    // console.log("Submitted");
    return true;
  } else {
    // console.log("Wrong Input");
    return false;
  }
}

function setTheINput(input) {
  let userInput = input.toLowerCase();
  let formattedINput = formatTheInput(userInput);
  return formattedINput;
}

function formatTheInput(input) {
  let formattedINput;
  console.log(input);
  formattedINput = [...input].map((letter, position) => {
    return { letter, position: position + 1 };
  });
  console.log("finput:", formattedINput); // clean

  return formattedINput;
}
