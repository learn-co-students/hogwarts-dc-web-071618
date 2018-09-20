import React from 'react'
import hogs from '../porkers_data'
import HogIndex from './HogIndex'

export default class HogListContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="ui divider"></div>
        <HogIndex allHogs={this.props.hogs} />
      </div>
    )
  }
}
