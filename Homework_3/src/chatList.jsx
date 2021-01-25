"use strict";

import React from "react";
import Message from "./message.jsx";


export default class ChatList extends React.Component {
  renderMessageElements = () => this.props.messages.map((message, index) => (<Message key={index} message={message}/>));
  render() {
    return (
      <div className="chatList">
        {this.renderMessageElements()}
      </div>
    )
  }
}