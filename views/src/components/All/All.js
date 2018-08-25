import React, { Component } from "react";
import Card from '../Card';
import Nav from "../Nav";

class All extends Component {
  state = {
    listOfKnives: [
      {
        name: "DMG",
        price: 125,
        maker: "Maxace",
        handlelength: 5,
        bladelength: 6,
        weight: 5.5,
        pivot: "Bearings",
        img: "https://i.imgur.com/7FUVzGp.jpg",
      },
      {
        name: "Pelican",
        price: 215,
        maker: "Maxace",
        handlelength: 5,
        bladelength: 6,
        weight: 5.5,
        pivot: "Bearings",
        img: "https://i.imgur.com/SwbHVkS.jpg"
      },
      {
        name: "Covenant",
        price: 350,
        maker: "Maxace",
        handlelength: 5,
        bladelength: 6,
        weight: 5.5,
        pivot: "Bearings",
        img: "https://i.redd.it/th6jb8toiv0z.jpg"
      }
    ]
  }

  apiCall() {
    //call to mongose db

    //update state with results
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className = "uk-container">
        <Nav/>
      {
        this.state.listOfKnives.map((knife) =>
          <Card 
            name={knife.name}
            price={knife.price}
            maker={knife.maker}
            handlelength={knife.handlelength}
            bladelength={knife.bladelength}
            weight={knife.weight}
            pivot={knife.pivot}
            img={knife.img}
          />)
      }
      </div>
    );
  }
}


export default All;