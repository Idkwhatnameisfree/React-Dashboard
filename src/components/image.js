
import React, { Component } from "react";

export class image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch("https://source.unsplash.com/random").then(response => {
      this.setState({ data: response.url });
      console.log(response.url);
    });
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <img alt="random" src={this.state.data} />
      </div>
    );
  }
}

export default image;
