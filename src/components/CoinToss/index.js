// Write your code here

import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0, s: 0}

  Change = () => {
    const s = Math.floor(Math.random() * 2)
    const {count, heads, tails} = this.state

    if (s === 0) {
      this.setState({count: count + 1, heads: heads + 1, s})
    } else {
      this.setState({count: count + 1, tails: tails + 1, s})
    }
  }

  render() {
    const {count, heads, tails, s} = this.state

    const imageUrl =
      s === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main">
        <div className="main-body">
          <h1 className="toss-game">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image1" />
          <button onClick={this.Change} className="buttonn">
            Toss Coin
          </button>
          <div className="last">
            <p>Total: {count}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
