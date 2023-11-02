import React, { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setresult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "scissor", "paper"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    setUserChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User Got the Point");
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setresult("User Wins");
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rokpaper"
      ) {
      }
    }
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Rock Scissor Paper</h1>
      <div className="score">
        <h1>User Point: {userPoints}</h1>
        <h1>Computer Point: {computerPoints}</h1>
      </div>

      <div className="choices-tab">
        <div className="choices">
          <div className="choice-user">
            <img
              className="user-hand"
              src={`../images/${userChoice}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="choices">
          <div className="choice-computer">
            <img
              className="computer-hand"
              src={`../images/${computerChoice}.png`}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleOnClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
