//css
import './App.css';

//data
import { wordsList } from "./data/words";

//react
import { useCallback, useState, useEffect } from 'react';

//componets
import StartScreem from './componets/StartScreem/StartScreem';
import GameSreem from './componets/GameScreem/GameSreem';
import EndScreem from './componets/EndScreem/EndScreem';


const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  return (
    <>
    <div className='App'>
      {gameStage === "start" && <StartScreem />}
      {gameStage === "game" && <GameSreem />}
      {gameStage === "end" && <EndScreem />}
    </div>
      
    </>
  )
}

export default App
