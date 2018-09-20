import React from 'react'

export default class CardFront extends React.Component {

  getImageSrc = () => {
    let slug = this.props.hog.name.split(' ').join('_').toLowerCase()
    return require(`../hog-imgs/${slug}.jpg`)
  }

  render() {
    return (
      <div className="ui card">
        <div className='ui header'>
          {this.props.hog.name}
        </div>
        <img src={this.getImageSrc()} alt={this.props.hog.name} />
      </div>
    )
  }
}
