import React from 'react'

export default class HogDetail extends React.Component {
	handleClick = () => {
		this.props.toggleShowDetail()
	}

	render() {
		return (
		<div className="ui eight wide column">
			<div key={this.props.hog.id} onClick={this.handleClick}>
				<h2>{this.props.hog.name}</h2>
				<p>Specialty: {this.props.hog.specialty}</p>
				<p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
				<p>Greased? {this.props.hog.greased ? 'Yes' : 'No'}</p>
				<p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
			</div>
			{/* <button className="ui button" onClick={this.props.hideCard}>Hide Me!</button> */}
		</div>
		)
	}
}
