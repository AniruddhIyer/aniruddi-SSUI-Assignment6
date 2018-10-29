import React, { Component } from 'react';
// import logo from './logo.svg';
import LocationItem from './LocationItem';
import './Locations.css';

class Locations extends Component {
  constructor(){
    super();
    this.locations = [
      {
        title: 'Brigade Millenium',
        category: 'Home',
        description: 'The Brigade Millennium Apartments is a famous landmark in South Bangalore. The location of these apartment is idea due quick connections to the Bangalore Metro service. Many different facilities are available in these apartments including the famous Woodrose clubhouse. ',
        icon: 'HomeIcon.png',
        picture: 'BrigadeMillenium.jpg'
      },
      {
        title: 'ESC Gaming Cafe',
        category: 'Gaming',
        description: 'ESC is a gaming cafe located in the south of Bangalore. This cafe offers a variety of games for each of the systems. Common games include League of Legends, DOTA 2, CSGO, PUBG, Fortnite, etc.',
        icon: 'GamingIcon.png',
        picture: 'ESC.jpg'
      },
      {
        title: 'PES University',
        category: 'University',
        description: 'PES University, located in Bangalore, India is one of the country’s leading teaching and research universities. The University is committed to providing “education for the real world” that inspires students to realize their potential.',
        icon: 'UniversityIcon.png',
        picture: 'PES.jpg'
      },
      {
        title: 'Accenture Labs',
        category: 'Internship',
        description: 'Accenture Labs put innovation to work for you. Our R&D groups research and apply newest technologies to help companies boost results today and future-proof their business.',
        icon: 'InternshipIcon.png',
        picture: 'Accenture.jpg'
      },
      {
        title: 'Social',
        category: 'Food',
        description: 'Social is a space that blends the best of the office and the café. Combining work and play, it is an urban hangout designed to take you offline while still keeping you connected. Social is a collaborative workspace, a hub for artists and innovators.',
        icon: 'FoodIcon.png',
        picture: 'Social.jpg'
      },
      {
        title: 'Kempegowda International Airport',
        category: 'Airport',
        description: 'Kempegowda International Airport Bengaluru, takes care to ensure that every bit of your travel, from your first touch-down at the gateway to South India to your flight back home, is memorable.',
        icon: 'AirportIcon.png',
        picture: 'KIA.jpg'
      }
    ]
  }
  divChange(index) {
    //alert("index is "+ index + this.locations[index].title);
    var heading = document.getElementById("title");
    var imag = document.getElementById("IMAGE");
    var desc = document.getElementById("description");

    heading.innerHTML=this.locations[index].title;
    imag.src=require("./" + this.locations[index].picture);
    desc.innerHTML=this.locations[index].description;

  }
  render() {
    
    console.log(this.locations)
    return (
      <div className="Locations">
        <div className="IconsPart">
          <div className="LocationIcon" onClick={() => this.divChange(0)}>
            <LocationItem locations={this.locations[0]}/>
          </div>
          <div className="LocationIcon" onClick={() => this.divChange(1)}>
            <LocationItem locations={this.locations[1]}/>
          </div>
          <div className="LocationIcon" onClick={() => this.divChange(2)}>
            <LocationItem locations={this.locations[2]}/>
          </div>
          <div className="LocationIcon" onClick={() => this.divChange(3)}>
            <LocationItem locations={this.locations[3]}/>
          </div>
          <div className="LocationIcon" onClick={() => this.divChange(4)}>
            <LocationItem locations={this.locations[4]}/>
          </div>
          <div className="LocationIcon" onClick={() => this.divChange(5)}>
            <LocationItem locations={this.locations[5]}/>
          </div>
        </div>
        <div className="ContentPart">
          <div id="title" className="titleClass">
          Welcome to Bangalore!
          </div>
          <div id="content" className="contentClass">
            <div id="image">
              <img id="IMAGE" src={require("./Bangalore.jpg")} width="400px" height="500px" alt="Image goes here"/> 
            </div>
            <div id="description">
            Please click on any of the icons on the side for different locations!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
