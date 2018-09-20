import React from 'react'

export default class Hog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false
        }    
    }

    toggleHidden = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }



    render() {
        return (
            <div className="ui four wide column" onClick={() => {this.props.selectHog(this.props.hog)}}>
                <div className="ui card" style={{display: this.state.hidden ? 'none': ''}}>{this.props.hog.name}
                {/* <button onClick={this.toggleHidden}>Hide</button> */}
                </div>
                    {/* <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
                    <li>Specialty: {this.props.hog.specialty}</li>
                    <li>Highest medal achieved: {this.props.hog['highest medal achieved']}</li>
                    <li>{this.props.hog.greased ? 'Not' : ''} Greased</li>
                    <img src={`../hog-imgs/${this.slugified(this.props.hog.name)}.jpg`}/> */}
                
            </div>
        )
    }
}