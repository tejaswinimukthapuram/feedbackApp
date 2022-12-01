// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onEmojiClick = () => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let display
    if (isEmojiClicked) {
      display = (
        <div className="thankyou-card">
          <img src={loveEmojiUrl} alt="Love Emoji" />
          <h1 className="heading">Thank you</h1>
          <p>
            We will use your feedback to improve customer support performance
          </p>
        </div>
      )
    } else {
      display = (
        <div>
          <h1>How satisfied are you with our customer support performance</h1>
          <ul className="emoji-container">
            {emojis.map(each => (
              <li key={each.id}>
                <button
                  type="button"
                  onClick={this.onEmojiClick}
                  className="button"
                >
                  <img src={each.imageUrl} alt={each.name} className="emoji" />
                  <p>{each.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="app-container">
        <div className="card-container">{display}</div>
      </div>
    )
  }
}

export default Feedback
