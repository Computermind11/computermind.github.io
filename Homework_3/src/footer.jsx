"use strict";

import React from "react";


export default class Footer extends React.Component {
  state = {
    year: null
  };
  componentDidMount() {
    const year = new Date;
    this.setState({year: year.getFullYear()})
  }
  render() {
    return (
      <footer>
        <p>&copy;&nbsp;The best messenger,&nbsp;2018&nbsp;-&nbsp;<span className="date">{this.state.year}</span>. All rights reserved.</p>
      </footer>
    )
  }
}