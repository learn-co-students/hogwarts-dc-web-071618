import React from 'react';
import Filters from './Filters'
import Hogs from './Hogs'

class Container extends React.Component{

  constructor(){
    super();

  this.state = {
    filtered: null,}
  }

  getFilter = (value)=>{
    this.setState({filtered: value})
  }

  render(){
  return (
    <div className='conWrapper'>
      < Filters onChange= {this.getFilter}/>
      < Hogs hogArray = {this.props.hogs} filtered={this.state.filtered}/>
    </div>
  )
  }


}

export default Container;
