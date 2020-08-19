import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
    border: `4px solid ${theme.palette.secondary.dark}`,
    filter: "grayscale(.5)",
    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0)",
      border: `4px solid ${theme.palette.secondary.light}`
    },
  },
  modalImage: {
    height: "auto",
    width: "auto",
    maxWidth: "95%",
    maxHeight: "95%",
  },
  imgPaper: {
    position: "relative",
    overflowX: "hidden",
    height: "auto",
    minHeight: "550px",
    maxHeight: "95vh",
    backgroundColor: "#eaf5e4",
  },
}));

const PhotoTour = () => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [playyardPics, setPlayyardPics] = useState(null);
  const [daycarePics, setDaycarePics] = useState(null);
  const [atPlayPics, setAtPlayPics] = useState(null);
  const [currentPic, setCurrentPic] = useState(null);

  const handleImageClick = (url) => {
    setModal(true);
    setCurrentPic(url);
  };

  const handleModalClose = () => {
    setCurrentPic(null);
    setModal(false);
  };

  useEffect(() => {
    fetch("/playyard")
      .then((res) => res.json())
      .then((obj) => {
        setPlayyardPics(obj.resources);
      });
    fetch("/daycare")
      .then((res) => res.json())
      .then((obj) => {
        setDaycarePics(obj.resources);
      });
    fetch("/atplay")
      .then((res) => res.json())
      .then((obj) => {
        setAtPlayPics(obj.resources);
      });
  }, []);

  if (!playyardPics || !daycarePics || !atPlayPics) {
    return (
      <>
        <Container className={classes.mainWrapper}>
          <Grid container spacing={4} alignItems="center" justify="center">
            <Grid
              item
              xs={11}
              component={Paper}
              classes={{ root: classes.paperRoot }}
              className={classes.titleBar}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Typography className={classes.title}>Gallery</Typography>
            </Grid>
            <Grid
              item
              xs={11}
              component={Paper}
              classes={{ root: classes.paperRoot }}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <CircularProgress color="secondary" />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }

  return (
    <>
      <div className={classes.relativeContainer}>
        <Dialog
          classes={{ paper: classes.imgPaper }}
          open={modal}
          onClose={handleModalClose}
          fullWidth
          maxWidth="md"
        >
          <IconButton
            className={classes.closeButton}
            onClick={handleModalClose}
          >
            <CancelIcon fontSize="large" color="secondary" />
          </IconButton>
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <img
              src={currentPic}
              alt="Peace of Mind Pic"
              className={classes.modalImage}
            />
          </DialogContent>
        </Dialog>
      </div>
      <Container className={classes.mainWrapper}>
        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            className={classes.titleBar}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.title}>Gallery</Typography>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.titleText}>The Play Yard</Typography>
            <br />
            <Grid container spacing={5} alignContent="center" justify="center">
              {playyardPics.map((tile) => (
                <Grid item lg={3} md={4} sm={6} key={tile.public_id}>
                  <img
                    src={tile.secure_url}
                    alt={tile.public_id}
                    className={classes.thumbnail}
                    onClick={() => handleImageClick(tile.secure_url)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.titleText}>The Daycare</Typography>
            <br />
            <Grid container spacing={5} alignContent="center" justify="center">
              {daycarePics.map((tile) => (
                <Grid item lg={3} md={4} sm={6} key={tile.public_id}>
                  <img
                    src={tile.secure_url}
                    alt={tile.public_id}
                    className={classes.thumbnail}
                    onClick={() => handleImageClick(tile.secure_url)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.titleText}>At Play</Typography>
            <br />
            <Grid container spacing={5} alignContent="center" justify="center">
              {atPlayPics.map((tile) => (
                <Grid item lg={3} md={4} sm={6} key={tile.public_id}>
                  <img
                    src={tile.secure_url}
                    alt={tile.public_id}
                    className={classes.thumbnail}
                    onClick={() => handleImageClick(tile.secure_url)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
};

export default PhotoTour;
