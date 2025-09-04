import "./StartScreem.css";

const StartScreem = ({startGame}) => {
  
  return (
    <div className="start">
        <h1>Guess The Word</h1>
        <p>Click the button below to start playing</p>
        <button onClick={startGame}>start playing</button>
    </div>
  )
}

export default StartScreem