import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

const [computer, setComputer] = useState("🎲");
const [player, setPlayer] = useState("🎲");
const gameIcons = ["🫱🏼","👊🏼", "✌🏼" ];
const [index, setIndex] = useState(null);
const [message, setMessage] = useState("")

function Play (value){
    let randIndex = Math.floor(Math.random() * gameIcons.length);
    setComputer(gameIcons[randIndex]);

    const playerChoice=gameIcons[index]
    setPlayer(playerChoice)

    const computerChoice=gameIcons[randIndex]

    if (computerChoice === playerChoice) {
        setMessage("Even");
    } else if (
        (computerChoice === "🫱🏼" && playerChoice === "👊🏼") ||
        (computerChoice === "👊🏼" && playerChoice === "✌🏼") ||
        (computerChoice === "✌🏼" && playerChoice === "🫱🏼")
    ) {
        setMessage("You lose!");
    } else {
        setMessage("You win!");
    }
}



  return (
    <div className="App">
      <div className="container">
          <div className="progress">
              <div className="emoji_box">
                  <h1>{message}</h1>
              </div>
              <div className="emoji_box">
                  <div className="emoji">{player}
                  </div>
                  <div className="emoji">{computer}</div>
              </div>
              <div className="emoji_box">
                  <div onClick={() => setIndex(0)} className={`icon ${index === 0 && "selected"}`}>🫱🏼</div>
                  <div onClick={() => setIndex(1)} className={`icon ${index === 1 && "selected"}`}>👊🏼</div>
                  <div onClick={() => setIndex(2)} className={`icon ${index === 2 && "selected"}`}>✌🏼</div>
                  <button onClick={Play}>Play</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
