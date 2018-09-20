import React from 'react'
import hogs from '../porkers_data'
import Hog from './Hog'
import HogDetail from './HogDetail'

export default class HogsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            hogs: hogs,
            selectedHog: hogs[0]
        }
    }

    selectHog = (hog) => {
        this.setState({
            selectedHog: hog
        })
        console.log(this.state.selectedHog)
    }

    sortHogsByName = () => {
        const hogsCopy = this.state.hogs.slice()
        hogsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            hogs: hogsCopy,
        })
        // this.setState({
        //     selectedHog: this.state.hogs[0]
        // })
    }

    filterGreased = (event) => {
        if(event.target.checked){
        const hogsCopy = this.state.hogs.slice()
        const filteredhogsCopy = hogsCopy.filter(hog => hog.greased)
        this.setState({
            hogs: filteredhogsCopy
        })
    }
        else {
            this.setState({
                hogs: hogs
            })
        }
    }

    unhide = () => {
        console.log('unhiding...')
    }

    sortHogsByWeight = () => {
        const hogsCopy = this.state.hogs.slice()
        hogsCopy.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
        this.setState({
            hogs: hogsCopy
        })
    }

    render() {
        return (
            <div>
            <button className="ui button" onClick={this.sortHogsByName}>Sort by name</button>
            <button className="ui button" onClick={this.sortHogsByWeight}>Sort by weight</button>
            <input type="checkbox" onChange={this.filterGreased}/>Show only greased hogs
            {this.state.selectedHog ? <HogDetail hog={this.state.selectedHog}/> : ''}
            <div className="ui grid container">

                    {this.state.hogs.map(hog => <Hog selectHog={this.selectHog} hog={hog}/>)}
            </div>
            </div>
        )
    }
}