import React from 'react'
import HogCard from './HogCard'

export default class HogIndex extends React.Component {
  render() {
    return (
      <div className="ui grid container">
      {this.props.allHogs.map(hog => (
        <HogCard hog={hog} />
      ))}
    </div>
    )
  }
}
