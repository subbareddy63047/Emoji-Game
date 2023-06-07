// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, condition} = this.props
    return (
      <div className="navbar-container">
        <div className="navbar-icon-container">
          <img
            className="navbar-img"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
        {condition ? (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default NavBar
