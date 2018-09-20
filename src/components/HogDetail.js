import React from 'react'
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'


export default class HogDetail extends React.Component {
    slugified(name) {
        const newName = name.split(' ').map(hog => {
            return hog.toLowerCase()
        }).join('_')
        return newName
    }

    //  imagePath(name) {
    //      return require(`../hog-imgs/${name}`)
    //  }

    render() {
        return (
            <div className="ui centered">
               { this.props.hog ? 
                <ul>
                <li>{this.props.hog.name}</li>
                <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
                <li>Specialty: {this.props.hog.specialty}</li>
                <li>Highest medal achieved: {this.props.hog['highest medal achieved']}</li>
                <li>{this.props.hog.greased ? 'Not' : ''} Greased</li>
                <img src={require(`../hog-imgs/${this.slugified(this.props.hog.name)}.jpg`)} /> 

                </ul>
               : ''}
            </div>
        )
    }
}