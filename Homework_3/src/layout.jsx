"use strict";

import React from "react";
import Header from "./header.jsx";
import MessengerBlock from "./messengerBlock.jsx";
import Footer from "./footer.jsx";


export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <main className="layout">
          <MessengerBlock/>
        </main>
        <Footer/>
      </>
    )
  }
}