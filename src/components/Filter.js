import React from 'react'

export default class Filter extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
            <option value="greased">Greased?</option>
          </select>
        </div>

      </div>
    )
  }

  handleChange = (e) => {
    this.props.onChangeSort(e.target.value)
  }
}
