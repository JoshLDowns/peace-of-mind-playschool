import React from "react";
import { Router } from "@reach/router";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home.js";
import PhotoTour from "./pages/PhotoTour.js";
import Handbook from "./pages/Handbook.js";
import Resources from "./pages/Resources.js";
import About from "./pages/About.js";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./styles/theme.js";

const theme = createMuiTheme(themeFile);

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <div id="main-container">
        <Navigation />
        <Router primary={false}>
          <Home path="/" />
          <About path="/about" />
          <PhotoTour path="/gallery" />
          <Handbook path="/handbook" />
          <Resources path="/resources" />
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
