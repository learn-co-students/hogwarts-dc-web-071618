import React from 'react'

export default class CardBack extends React.Component{
  render() {
    return (
      <div>
        <h2>{this.props.hog.name}</h2>
          <p>
            Specialty: {this.props.hog.specialty}
          </p>
          <p>
            Medal: {this.props.hog['highest medal achieved']}
          </p>
          <p>
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          </p>

          {this.props.hog.greased ? <p>Greased</p> : <p>Not greased</p>}

      </div>
    )
  }
}
