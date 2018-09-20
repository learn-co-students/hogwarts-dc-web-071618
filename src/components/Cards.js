import React from 'react';

class Cards extends React.Component{

  constructor(){
    super();
    this.state = {
      clicked: false,}
    }

  slugify(hog){
    return hog.name.split(" ").join("_").toLowerCase()
  }

  frontCard(){
    return (
      <div className="ui card">
        <div className="image">
          <img src= {require(`../hog-imgs/${this.slugify(this.props.hog)}.jpg`)} alt='pig'></img>
        </div>
          <div className="content">
          <div className="header">
            <button onClick={this.handleClick}>{this.props.hog.name}</button>
          </div>
        </div>
      </div>
    )
  }

  backCard(){
    return (
      <div className="ui card">
          <div className="content">
          <div className="header">
            <button onClick={this.handleClick}>{this.props.hog.name}</button>
          </div>
          <div className="specialty">{this.props.hog.specialty}</div>
          <div className="weight">{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</div>
          <div className="hmo">{this.props.hog['highest medal achieved']}</div>
        </div>
      </div>
    )
  }

  handleClick = event =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (
      <div className = 'cards'>
      {this.state.clicked ? this.backCard() : this.frontCard()}
      </div>
    )
  }}

export default Cards;
