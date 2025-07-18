import React from 'react'
import './GameScreem.css'

const GameSreem = ({verifyLetter}) => {
  return (
    <div className="game">


      <p className="points">
        <span>Score: 000</span>
      </p>


      <h1>Guess the word:</h1>
      <h3 className="tip">
        Tip about the word: <span>Tip...</span>
      </h3>


      <div className="containerWord">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>

      <div className="letterContainer">
        <p>Try to guess a letter of the word: </p>
        <form>
          <input type="text" name='letter' maxLength='1' required/>
          <button>Play</button>

        </form>
      </div>
      <div className="worngLetterConteiner">
        <p>used letters:</p>
        <span>a,</span>
        <span>b,</span>
      </div>



    </div>
  )
}

export default GameSreem