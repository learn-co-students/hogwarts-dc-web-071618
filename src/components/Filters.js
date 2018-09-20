import React from 'react';

class Filters extends React.Component{

  constructor(){
    super();
  }

  render(){
  return (
    <div className='filterWrapper'>
    <span className="normalText">Sort by:</span>
      <select className='ui dropdown' onChange={event=> this.props.onChange(event.target.value)}>
        <option value=''></option>
        <option value='1'>Name</option>
        <option value='2'>Weight</option>
        <option value='3'>Greased Hogs</option>
      </select>
  </div>
  )
  }

}

export default Filters;
