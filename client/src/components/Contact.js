import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
  hiddenGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contentRoot: {
    padding: "0px 15px",
    height: "100%",
  },
  dialogPaper: {
    position: "relative",
    overflowX: "hidden",
    height: "auto",
    minHeight: "550px",
    maxHeight: "95vh",
    backgroundColor: "#eaf5e4",
    [theme.breakpoints.down("sm")]: {
      height: "70vh"
    },
    [theme.breakpoints.down("xs")]: {
      height: "76vh"
    }
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ status: "ok" });
  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors({});
    const errorObj = { name: false, email: false, message: false };
    if (name === "") {
      errorObj.name = true;
    }
    if (email === "") {
      errorObj.email = true;
    }
    if (message === "") {
      errorObj.message = true;
    }
    if (errorObj.name || errorObj.email || errorObj.message) {
      return setErrors(errorObj);
    }
    fetch("/newContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((jsonObj) => {
        console.log(jsonObj);
        setStatus(jsonObj);
      });

    setSubmitted(true);
    resetForm();
  };

  const handleModalClose = () => {
    if (submitted) {
      setSubmitted(false);
    }
    setModal(false);
  };

  return (
    <div>
      <Tooltip title="Contact">
        <IconButton onClick={() => setModal(true)}>
          <ContactSupportIcon fontSize="large" color="secondary" />
        </IconButton>
      </Tooltip>
      <div className={classes.relativeContainer}>
        <Dialog
          classes={{ paper: classes.dialogPaper }}
          open={modal}
          onClose={handleModalClose}
          fullWidth
          maxWidth="lg"
        >
          <IconButton
            className={classes.closeButton}
            onClick={handleModalClose}
          >
            <CancelIcon fontSize="large" color="secondary" />
          </IconButton>
          <DialogTitle>
            <Typography variant="body1">Located atop Georgia Mt.</Typography>
            <Typography variant="body1">802.578.5451</Typography>
          </DialogTitle>
          <div className={classes.contentRoot}>
            {submitted === false && (
              <>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <br />
                  <Typography className={classes.headerText}>
                    We are currently full, but feel free to inquire about future
                    availability!
                  </Typography>
                  <br />
                  <Divider />
                  <br />
                </div>
                <form>
                  <Grid container spacing={5}>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        required
                        id="name"
                        label="Name"
                        autoComplete="none"
                        autoFocus
                        helperText={errors.name ? "Name is required" : null}
                        error={errors.name}
                        value={name}
                        onChange={(evt) => {
                          setName(evt.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        required
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        type="email"
                        helperText={errors.email ? "Email is required" : null}
                        error={errors.email}
                        value={email}
                        onChange={(evt) => {
                          setEmail(evt.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        color="secondary"
                        required
                        id="message"
                        label="Message"
                        autoComplete="none"
                        helperText={
                          errors.message ? "Message is required" : null
                        }
                        error={errors.message}
                        value={message}
                        onChange={(evt) => {
                          setMessage(evt.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item md={3} className={classes.hiddenGrid} />
                    <Grid item md={6} sm={12} xs={12}>
                      <Button
                        className={classes.submit}
                        onClick={handleSubmit}
                        variant="contained"
                        color="secondary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                    <Grid item md={3} className={classes.hiddenGrid} />
                  </Grid>
                </form>
              </>
            )}
            {submitted && status.status === "ok" && (
              <>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "15% auto",
                  }}
                >
                  <Typography className={classes.titleText}>
                    Thank you for your inquiry! I'll be back in touch as soon as
                    I can!
                  </Typography>
                </div>
              </>
            )}
            {submitted && status.status !== "ok" && (
              <>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "15% auto",
                  }}
                >
                  <Typography className={classes.titleText}>
                    It looks like there was an error! Please contact me by phone
                    at 802-578-5451.
                  </Typography>
                </div>
              </>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Contact;
