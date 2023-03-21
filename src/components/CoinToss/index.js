// Write your code here
import {Component} from 'react'

import './index.css'

const coinsList = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    tossResult: coinsList[0].imageUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state

    let letestHeadsCount = headsCount
    let letestTailsCount = tailsCount
    let tossImage = ''

    if (tossResult === 0) {
      letestHeadsCount += 1
      tossImage = coinsList[0].imageUrl
    } else {
      letestTailsCount += 1
      tossImage = coinsList[1].imageUrl
    }

    this.setState({
      tossResult: tossImage,
      headsCount: letestHeadsCount,
      tailsCount: letestTailsCount,
    })
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossResult} alt="toss result" className="toss-coin-image" />
          <button className="button" onClick={this.onClickButton} type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-number">Total: {totalCount}</p>
            <p className="count-number">Heads: {headsCount}</p>
            <p className="count-number">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
