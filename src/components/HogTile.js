import React from 'react'

export default class HogTile extends React.Component {
	slugify = (name) => {
		return name.toString().toLowerCase()
			.replace(/\s+/g, '_')
	}

	image = (name) => {
		return require(`../hog-imgs/${this.slugify(name)}.jpg`)
	}

	handleClick = () => {
		this.props.toggleShowDetail()
	}

	render() {
		return (
		<div className="ui eight wide column">
			<div key={this.props.hog.id} onClick={this.handleClick}>
				<h2>{this.props.hog.name}</h2>
				<img src={`${this.image(this.props.hog.name)}`}></img>
			</div>
			{/* <button className="ui button" onClick={this.props.hideCard}>Hide Me!</button> */}
		</div>
		)
	}
}
