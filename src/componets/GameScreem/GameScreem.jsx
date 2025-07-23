import React, { useState, useRef } from 'react'
import './GameScreem.css'

const GameSreem = ({verifyLetter, pikedCategory, pikedLetters, pikedWord, guessedLetters, wrongLetters, guesses, score}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter)

    setLetter("");
    letterInputRef.current.focus();


  }
  
  return (
    <div className="game">


      <p className="points">
        <span>Score: {score}</span>
      </p>


      <h1>Guess the word:</h1>
      <h3 className="tip">
        Tip about the word: <span>{pikedCategory}</span>
      </h3>

      <p>you have {guesses} attempts</p>


      <div className="containerWord">
        {pikedLetters.map((pikedLetters, i)=> (
          guessedLetters.includes(pikedLetters) ? (<span key={i} className="letter">{pikedLetters}</span> ) : ( <span key={i} className="blankSquare"></span>))
        )}
      </div>

      <div className="letterContainer">
        <p>Try to guess a letter of the word: </p>


        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength='1' required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Play</button>

        </form>
      </div>
      <div className="worngLetterConteiner">
        <p>used letters:</p>
        {wrongLetters.map((pikedLetters, i) => <span key={i}>{pikedLetters}, </span>)}
      </div>



    </div>
  )
}

export default GameSreem