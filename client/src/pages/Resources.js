import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
}));

const Resources = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainWrapper}>
        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.title}>Resources</Typography>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.titleText}>
              Online Resources
            </Typography>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="http://dcf.vermont.gov/childcare/parents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                VT Childcare Information for Parents
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.ncssinc.org/children-youth-family-services/family-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Franklin County Family Center
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="http://dcf.vermont.gov/benefits/ccfap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Childcare Financial Assistance
              </Typography>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://www.healthvermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Health Department
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.investinvermont.org/borrowers/early-care-and-learning/building-bright-spaces-for-bright-futures.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Building Bright Spaces
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.letsgrowkids.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Let's Grow Kids
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.titleText}>Documents</Typography>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/parent-provider-handbook.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Parent/Provider Handbook
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/enrollment-agreement.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Enrollment Agreement
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/general-health-examination-form.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                General Health Examination Form
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/medication-administration-form.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Medication Administration Form
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/medical-communication-authorization.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Medical Communication Authorization
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/asthma-action-plan.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Asthma Action Plan
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/permission-form-but-spray.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Bug Spray Permission Form
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/permission-form-sunscreen.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Sunscreen Permission Form
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`/pdffiles/permission-form-water-play.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className={classes.resourceText}>
                Water Play Permission Form
              </Typography>
            </a>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
};

export default Resources;
