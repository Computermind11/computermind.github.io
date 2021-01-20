"use strict";

import React from "react";
import Message from "./message.jsx";


export default class MessageField extends React.Component {
  state = {
    messages: ["Привет! Отправлено от: Ivan."],
  };
  componentDidUpdate() {
    if (this.state.messages.length % 2 === 0) {
      setTimeout(() => this.setState({"messages": [...this.state.messages, "Не приставай ко мне, я - робот."]}), 1000);
    }
  }
  handleClick = () => {
    this.setState({"messages": [...this.state.messages, "Как дела? Отправлено от: Ivan."]});
  }
  render() {
    const messageElements = this.state.messages.map((text, index) => (<Message key={index} text={text}/>));

    return (
      <div>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение!</button>
      </div>
    )
  }
}