"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "../css/normalize.css";
import "../css/styles.css";


ReactDOM.render(
  <MuiThemeProvider>
    <Layout/>
  </MuiThemeProvider>,
  document.getElementById("container")
);