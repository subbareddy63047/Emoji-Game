// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {checkconditon, score} = props
  const subbu = () => {
    checkconditon()
  }
  const topScoreMethod = () => {
    if (score === 12) {
      return (
        <div className="subbu">
          <div className="first-container">
            <h1 className="heading">You Won</h1>
            <div>
              <p className="score1">Best Score</p>
              <p className="digit1">12/12</p>
              <button className="button1" type="button" onClick={subbu}>
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="img1"
          />
        </div>
      )
    }
    return (
      <div className="subbu">
        <div className="first-container">
          <h1 className="heading">You Lose</h1>
          <div>
            <p className="score1">Score</p>
            <p className="digit1">{score}/12</p>
            <button className="button1" type="button" onClick={subbu}>
              Play Again
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="img1"
        />
      </div>
    )
  }
  return <div className="win_lose-container">{topScoreMethod()}</div>
}

export default WinOrLoseCard
