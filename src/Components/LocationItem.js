import React, { Component } from 'react';
// import logo from './logo.svg';

class LocationItem extends Component {
  render() {
    console.log(this.props.locations.icon)
    return (
      
      <img src={require("./" + this.props.locations.icon)} alt="Icon" width="95px" height="95px"/>
  
    );
  }
}

export default LocationItem;
