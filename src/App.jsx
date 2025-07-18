//css;
import './App.css';

//data;
import { wordsList } from "./data/words";

//react;
import { useCallback, useState, useEffect } from 'react';

//componets;
import StartScreem from './componets/StartScreem/StartScreem';
import GameSreem from './componets/GameScreem/GameScreem';
import EndScreem from './componets/EndScreem/EndScreem';


const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pikedWord, setPikedWord] = useState("");
  const [pikedCategory, setPikedCategory] = useState("");
  const [pikedLetters, setPikedLetters] = useState("");

  const pikedWordAndCategory = ()=>{
    
    const categories = Object.keys(words);
    
    //pick a random category
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word from the category

    const word = words[category][Math.floor(Math.random() * words[category].length)];


    console.log(category);
    console.log(word);
  };

  const startGame = ()=>{
    setGameStage(stages[1].name);
    pikedWordAndCategory();
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retryGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
    <div className='App'>
      {gameStage === "start" && <StartScreem startGame={startGame}/>}
      {gameStage === "game" && <GameSreem  verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <EndScreem retryGame={retryGame}/>}
    </div>
      
    </>
  )
}

export default App
