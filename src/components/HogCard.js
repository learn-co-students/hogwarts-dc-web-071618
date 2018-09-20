import React from 'react'
import HogTile from './HogTile'
import HogDetail from './HogDetail'

export default class HogCard extends React.Component {
	constructor() {
		super()
		this.state = {
			showDetail: false,
			hide: false
		}
	}

	hideCard = () => {
		this.setState({
			hide: true
		})
	}

	toggleShowDetail = () => {
		this.state.showDetail ? this.setState({showDetail: false}) : this.setState({showDetail: true})
	}

	render() {
		return (
			this.state.showDetail ? <HogDetail hog={this.props.hog} toggleShowDetail={this.toggleShowDetail} hideCard={this.hideCard}/> : <HogTile hog={this.props.hog} toggleShowDetail={this.toggleShowDetail} hideCard={this.hideCard}/>

		)
	}
}
