"use strict";

import React from "react";
import ReactDOM from "react-dom";

let allMessages = [];
const message = "Нормально!";


const MainComponent = () => <main className="main">
                              <div className="textBlock"></div>
                              <button className="button" onClick={addMessage}>Отправить сообщение!</button>
                            </main>;


function addMessage() {
  allMessages.push(message);
  console.log(allMessages);

  let ParagraphComponent = (values) => <p className="paragraph">{values.text}</p>;

  let MessageField = (values) => values.allMessages.map((message) => <ParagraphComponent text={message}/>);

  ReactDOM.render(
    <MessageField allMessages={allMessages}/>,
    document.querySelector(".textBlock")
  );
}


ReactDOM.render(
  <MainComponent/>,
  document.getElementById("container")
);