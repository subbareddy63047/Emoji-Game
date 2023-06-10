/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

/* if (list.length > topScore) {
        this.setState({
          score: 0,
          topScore: list.length,
          list: [],
          condition: false,
        })
      } else {
        this.setState({score: 0, list: []})
      } */

// Write your code here.

import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    list: [],
    condition: true,
  }

  checkconditon = () => {
    this.setState({condition: true, score: 0})
  }

  checkClick = emojiUrl => {
    const {list, topScore, score} = this.state
    console.log(score)
    if (score === 11) {
      this.setState({
        topScore: list.length + 1,
        list: [],
        condition: false,
        score: 12,
      })
    } else if (list.includes(emojiUrl)) {
      console.log(`length ${list.length}`)
      if (list.length > topScore) {
        this.setState({
          topScore: list.length,
          list: [],
          condition: false,
        })
      } else {
        this.setState({score: list.length, list: [], condition: false})
      }
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, emojiUrl],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, condition} = this.state
    return (
      <div className="main-bg-container">
        <div className="background-container">
          {condition ? (
            <NavBar topScore={topScore} score={score} condition={condition} />
          ) : (
            <NavBar condition={condition} />
          )}
          {condition ? (
            <ul className="emoji-card-container">
              {emojisList
                .sort(() => Math.random() - 0.5)
                .map(eachItem => (
                  <EmojiCard
                    id={eachItem.id}
                    key={eachItem.id}
                    emojiName={eachItem.emojiName}
                    emojiUrl={eachItem.emojiUrl}
                    checkClick={this.checkClick}
                  />
                ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} checkconditon={this.checkconditon} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
