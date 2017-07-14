import React, { Component } from 'react';


class SearchBar extends Component{
state = {

}
  render(){
    return <div>{this.state.newEvent}<br/>
    <input onChange={(e) => this.logEvent(e)}/></div>;
  }
  logEvent(event){
    this.setState({newEvent: event.target.value});
    //return console.log(event.target.value);
  }
}

export default SearchBar;

//const logEvent = (event) => {
//  return console.log(event.target.value);
// }
