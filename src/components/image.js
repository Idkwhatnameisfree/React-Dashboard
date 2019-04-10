
import React, { Component } from "react";
import Clock from "./clock";
import Reload from './reload'
import './styles.css'

export class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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

 <div className="img" style={{ backgroundImage: `url(${this.state.data})` }}>
<Clock />
<Reload />
</div>
    );
  }
}

export default Image;
