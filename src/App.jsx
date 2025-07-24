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
  const [pikedLetters, setPikedLetters] = useState([]);

  const [ guessedLetters, setGuessedLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ guesses , setGuesses ] = useState(3);
  const [ score, setScore ] = useState(0);

  const pikedWordAndCategory = useCallback(()=>{
    
    const categories = Object.keys(words);
    
    //pick a random category
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word from the category

    const wordL = words[category][Math.floor(Math.random() * words[category].length)];


    return {wordL, category}
  }, [words]);

  const startGame = useCallback(() =>{
      clearLetterStates();
      

      const { wordL, category} = pikedWordAndCategory();

      let wordLetters = wordL.split("");
      wordLetters = wordLetters.map((l) => l.toLowerCase());
      
     
      setPikedCategory(category);
      setPikedLetters(wordLetters);
      setPikedWord(wordL);
     



    setGameStage(stages[1].name);

  }, [pikedWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {return};

    //push guessed letter or remove a guess
    if (pikedLetters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter,])
    } else{
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter,])
    setGuesses((actualGuesses)=>actualGuesses - 1);
    }


  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(()=>{
    if(guesses <= 0) {
      //reset all stages
      clearLetterStates();

      setGameStage(stages[2].name)
    }
  },[guesses])


  useEffect(()=>{
      const uniqueLetters = [...new Set(pikedLetters)];

    if(guessedLetters.length === uniqueLetters.length) { 
      console.log(uniqueLetters)
      setScore((actualScore) => actualScore += 100);
    
      startGame();
    }
    
  },[guessedLetters])
    

  const retryGame = () => {
    setGuesses(3)
    setScore(0)
    setGameStage(stages[0].name);
  };

  return (
    <>
    <div className='App'>
      {gameStage === "start" && <StartScreem startGame={startGame}/>}

      {gameStage === "game" && <GameSreem  
      verifyLetter={verifyLetter}
      pikedCategory={pikedCategory}
      pikedLetters={pikedLetters}
      pikedWord={pikedWord}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}

      />}


      {gameStage === "end" && <EndScreem retryGame={retryGame} score={score}/>}
    </div>
      
    </>
  )
}

export default App
