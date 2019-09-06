import React, { Component } from "react";
import imgArr from "./Images";

export default class Canidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canidates: [
        { id: 0, name: "Michael Bennet", votes: 0 },
        { id: 1, name: "Joe Biden", votes: 0 },
        { id: 2, name: "Cory Booker", votes: 0 },
        { id: 3, name: "Steve Bullock", votes: 0 },
        { id: 4, name: "Pete Buttigieg", votes: 0 },
        { id: 5, name: "Julian Castro", votes: 0 },
        { id: 6, name: "Bill de Blasio", votes: 0 },
        { id: 7, name: "John Delaney", votes: 0 },
        { id: 8, name: "Tulsi Gabbard", votes: 0 },
        { id: 9, name: "Kamala Harris", votes: 0 },
        { id: 10, name: "Amy Klobuchar", votes: 0 },
        { id: 11, name: "Wayne Messam", votes: 0 },
        { id: 12, name: "Beto O'Rourke", votes: 0 },
        { id: 13, name: "Tim Ryan", votes: 0 },
        { id: 14, name: "Bernie Sanders", votes: 0 },
        { id: 15, name: "Joe Sestak", votes: 0 },
        { id: 16, name: "Tom Steyer", votes: 0 },
        { id: 17, name: "Elizabeth Warren", votes: 0 },
        { id: 18, name: "Marianne Williamson", votes: 0 },
        { id: 19, name: "Andrew Yang", votes: 0 }
      ]
    };
  }

  handleClick = e => {
    let canidateCopy = this.state.canidates;
    canidateCopy[e.target.id].votes++;
    this.setState({ canidates: canidateCopy });
  };

  componentDidUpdate() {
    let sortedList = [...this.state.canidates];
    sortedList.sort((a, b) => a.votes - b.votes);
    let winnerArr = sortedList[sortedList.length - 1];
    this.frontRunner = winnerArr.name;
  }

  render() {
    let renderImg = imgArr[20];
    for (let i = 0; i < this.state.canidates.length; i++) {
      if (this.frontRunner === this.state.canidates[i].name) {
        renderImg = imgArr[i];
      } else {
        this.renderImg = null;
      }
    }
    return (
      <div className="canidates">
        <div className="photo">
          <img src={renderImg} alt="" />
        </div>
        <div className="frontRunner">
          {this.frontRunner ? (
            <h1>{this.frontRunner}</h1>
          ) : (
            <h1>No winner yet</h1>
          )}
        </div>
        <ul style={{ listStyleType: "none" }}>
          {this.state.canidates.map(canidate => (
            <li key={canidate.id}>
              {canidate.name}
              <span> </span>
              <button id={canidate.id} onClick={this.handleClick}>
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
