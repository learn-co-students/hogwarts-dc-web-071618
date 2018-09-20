import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class HogCard extends React.Component{
  state = {
    showBack: false
  }

  flipCard = () => {
    this.setState({
      showBack: !this.state.showBack
    })
  }

  render() {
    return (
      <div className="ui card" onClick={this.flipCard}>
        {!this.state.showBack ? <CardFront hog={this.props.hog}/> : <CardBack hog={this.props.hog} />}
      </div>
    )
  }
}
