import React from 'react';
import Cards from './Cards'

class Hogs extends React.Component{

  constructor(){
    super();
  }

  checkFilter(){
    console.log(this.props.filtered)
    console.log(this.props.filtered == '1')
    switch(this.props.filtered){
      case '1':
        return this.filterByName()
        break;
      case '2':
        return this.filterByWeight()
        break;
      case '3':
        return this.filterByGreased()
      break;
      default:
        return this.props.hogArray
    }
  }

  filterByName(){
    return this.props.hogArray.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;});
  }

  filterByWeight(){
    return this.props.hogArray.sort(function(a, b){
      return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    })
  }

  filterByGreased(){
    return this.props.hogArray.filter(function(a){
      return a.greased})
  }

  render(){
    return (
    <div className='hogsWrapper'>
    {this.checkFilter().map(h=>{
      return <Cards key={h.name} hog={h}/>})}
    </div>
  )
  }

}

export default Hogs;
