import React from 'react'
import './EndScreem.css'

const EndScreem = ({retryGame, score}) => {
  return (
    <div className='endGame'>
      <h1>Game Over</h1>
      <h2>your score is: <span>{score}</span></h2>
      <button onClick={retryGame}>Retry Game</button>
    </div>
  )
}

export default EndScreem