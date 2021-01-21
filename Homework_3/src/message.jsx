"use strict";

import React from "react";


export default class Message extends React.Component {
  render() {
    return (
      <div className="messageText" style={{alignSelf: this.props.message.user === "Robot" ? "flex-start" : "flex-end"}}>
        <p>{this.props.message.text}</p>
        <p className="userName">{this.props.message.user}</p>
      </div>
    )
  }
}