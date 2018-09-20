import React from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data';

export default class HogsContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			hogs: hogs,
			filtered: false,
			sort: null,
		}
	}

	handleCheck = (event) => {
		this.state.filtered ? this.setState({
			 filtered: false}) : this.setState({ filtered: true })
	}

	handleSort = (event) => {
		const value = event.target.value
		this.setState({
			sort: value
		})
	}

	sortHogs = (array, value) => {
		return value ? this.sortByNameOrWeight(array, value) : array
	}

	sortByNameOrWeight = (array, value) => {
		return value === "name" ?
			//true - sort by name
			array.sort(function(a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
			:
			//false - sort by weight
			array.sort(function (a, b) {
				return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
			})
	}


	render() {
		const greasedHogs = this.state.hogs.filter(hog => hog.greased === true)

		return (
		<div>
			<div className="filter-bar">
				<div className="ui toggle checkbox">
					<input type="checkbox" name="Greased" value={this.state.filtered} onChange={this.handleCheck}/>
					<label> Greased</label>
				</div>
				<div className="ui form">
					<form>
						<label>Sort by &nbsp;
							<select value={this.state.sort} onChange={this.handleSort}>
								<option value="null"></option>
								<option value="name">Name</option>
								<option value="weight">Weight</option>
							</select>
						</label>
					</form>
				</div>
				{/* <button className="ui button">Unhide All Hogs</button> */}
			</div>
			<div className="ui grid container">
				{this.state.filtered ? this.sortHogs(greasedHogs, this.state.sort).map(hog => <HogCard hog={hog} />) : this.sortHogs(this.state.hogs, this.state.sort).map(hog => <HogCard hog={hog} />)}

			</div>
		</div>
		)
	}
}
