// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiName, emojiUrl, checkClick} = props
  const identify = () => {
    checkClick(emojiUrl)
  }

  return (
    <li className="each-emoji">
      <button type="button" className="button" onClick={identify}>
        <img className="img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
