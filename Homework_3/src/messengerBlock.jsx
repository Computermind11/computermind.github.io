"use strict";

import React from "react";
import ChatList from "./chatList.jsx";
import {TextField, FloatingActionButton} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";


export default class MessengerBlock extends React.Component {
  state = {
    messages: [{text: "Hello!", user: "Robot"}],
    input: ""
  };
  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].user === "Ivan") {
      setTimeout(() => {
        this.setState({messages: [...this.state.messages, {text: "Don't worry me, I'm Robot!", user: "Robot"}]});
        document.querySelector("input").removeAttribute("disabled", "true");
      }, 1500);
    }
  }
  sendMessage = (message) => {
    document.querySelector("input").setAttribute("disabled", "true");
    this.setState({
      messages: [...this.state.messages, {text: message, user: "Ivan"}],
      input: ""
    });
  }
  handleClick = (message) => this.sendMessage(message);
  handleChange = (event) => this.setState({input: event.target.value});
  handleKeyUp = (event, message) => {
    if (event.key === "Enter") {
      this.sendMessage(message);
    }
  }
  render() {
    return (
      <>
        <ChatList messages={this.state.messages}/>
        <div className="messageField">
          <TextField
            name="input"
            fullWidth={true}
            hintText="Enter your message..."
            style={{fontSize: "22px"}}
            value={this.state.input}
            onChange={this.handleChange}
            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <FloatingActionButton onClick={() => this.handleClick(this.state.input)}><SendIcon/></FloatingActionButton>
        </div>
      </>
    )
  }
}