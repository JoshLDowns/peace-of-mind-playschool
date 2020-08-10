import React, { useState } from "react";
import { Link } from "@reach/router";

import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
  menuList: {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

const NavMenu = ({ currentPage, setCurrentPage }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (evt) => {
    setAnchorEl(evt.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Navigation">
        <IconButton
          aria-owns={anchorEl ? "notifications" : undefined}
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <MenuIcon fontSize="large" color="secondary" />
        </IconButton>
      </Tooltip>
      <Menu
        classes={{list: classes.menuList}}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List style = {{backgroundColor: "#eaf5e4", padding: 0}} >
          <ListItem
            button
            onClick={()=>{
              handleClose()
              setCurrentPage("/")
            }}
            component={Link}
            to="/"
            selected={currentPage === "/"}
          >
            <ListItemIcon>
              <HomeIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.titleText} primary="Home" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={()=>{
              handleClose()
              setCurrentPage("/about")
            }}
            component={Link}
            to="/about"
            selected={currentPage === "/about"}
          >
            <ListItemIcon>
              <InfoIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.titleText} primary="About" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={()=>{
              handleClose()
              setCurrentPage("/gallery")
            }}
            component={Link}
            to="/gallery"
            selected={currentPage === "/gallery"}
          >
            <ListItemIcon>
              <PhotoLibraryIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.titleText} primary="Gallery" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={()=>{
              handleClose()
              setCurrentPage("/handbook")
            }}
            component={Link}
            to="/handbook"
            selected={currentPage === "/handbook"}
          >
            <ListItemIcon>
              <ImportContactsIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.titleText} primary="Handbook" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={()=>{
              handleClose()
              setCurrentPage("/resources")
            }}
            component={Link}
            to="/resources"
            selected={currentPage === "/resources"}
          >
            <ListItemIcon>
              <DashboardIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.titleText} primary="Resources" />
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default NavMenu;
