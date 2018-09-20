import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogListContainer from './HogListContainer'
import Filter from './Filter'


class App extends Component {
  constructor() {
    super()
    this.state = {
      allHogs: hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Filter onChangeSort={this.onChangeSort}/>
          <HogListContainer hogs={this.state.allHogs}/>
      </div>
    )
  }

  onChangeSort = (sortValue) => {
    let hogsArray = this.state.allHogs
    switch(sortValue) {
      case 'name':
        hogsArray.sort((a,b) => {
          return a.name.localeCompare(b.name)
        });
        break;
      case 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water':
        hogsArray.sort((a,b) => {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        });
        break;
      case 'greased':
        hogsArray = this.state.allHogs.filter(hog => {
          return hog.greased === true
        });
        break;
      case 'all':
        hogsArray = hogs;
        break;
      default:
        hogsArray = hogs
    }

    this.setState({
      allHogs: hogsArray
    })
  }
}

export default App;
