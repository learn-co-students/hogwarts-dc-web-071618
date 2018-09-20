import React from 'react'

export default class RandomGif extends React.Component {
  state = {
    gifUrl: ''
  }

  componentDidMount() {
    this.fetchGif()
  }

  fetchGif = () => {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pigs&rating=g`)
    .then(r => r.json())
    .then(json => {
      this.setState({
        gifUrl: json.data.images.original.url
      })
    })
  }

  render() {
    return (
      <img src={this.state.gifUrl} />
    )
  }
}
