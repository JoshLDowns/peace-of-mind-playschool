import React, { useState } from "react";

import NavMenu from "./NavMenu";
import Contact from "./Contact";

import logoNoText from "../styles/src_img/Logo_no_text.png";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navigation = (props) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "5px solid #736372"
            }}
          >
            <NavMenu
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <img src={logoNoText} alt="logo" className={classes.logoSmall} />
            <Contact />
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Navigation;
