import React from 'react'

const EndScreem = ({retryGame}) => {
  return (
    <>
      <div>Game Over</div>
      <button onClick={retryGame}>Retry Game</button>
    </>
  )
}

export default EndScreem