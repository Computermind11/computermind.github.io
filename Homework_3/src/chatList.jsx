"use strict";

import React from "react";
import Message from "./message.jsx";


export default class ChatList extends React.Component {
  render() {
    const messageElements = this.props.messages.map((message, index) => (<Message key={index} message={message}/>));

    return (
      <div className="chatList">
        {messageElements}
      </div>
    )
  }
}