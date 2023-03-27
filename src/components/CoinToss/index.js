import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, op: 0}

  onClickBtn = () => {
    const res = Math.floor(Math.random() * 2)
    this.setState({op: res})
    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: res === 0 ? prevState.heads + 1 : prevState.heads,
      tails: res !== 0 ? prevState.tails + 1 : prevState.tails,
    }))
  }

  render() {
    const {total, heads, tails, op} = this.state
    const url =
      op === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    console.log(op)
    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="info">Heads (or) Tails</p>
          <img className="img" src={url} alt="toss result" />
          <div className="btnCont">
            <button type="button" className="btn" onClick={this.onClickBtn}>
              Toss Coin
            </button>
          </div>
          <div className="result">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
