import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
}));

const About = () => {
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
            <Typography className={classes.title}>About Me</Typography>
          </Grid>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ marginBottom: "20px" }}
          >
            <Grid item xs={11}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://res.cloudinary.com/joshdowns-dev/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1597014214/peace_of_mind/IMG_4321_coztqh.jpg"
                  className={classes.aboutImage}
                  alt="On the porch"
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ marginBottom: "20px" }}
          >
            <Typography className={classes.bodyText} variant="body1">
              From the time I was a little girl I knew that I wanted to work
              with children when I grew up. I spent 17 years in banking, then
              had my second child and just knew that was the right time to open
              my child care business. I was fortunate enough to have family
              caring for my children, however it’s still killed me to leave them
              every day. I knew my family could not do it forever, and I
              struggled to find a childcare provider that I could trust. My goal
              has always been to provide high-quality child care where
              Parents/caretakers can have “peace of mind” leaving their children
              every day.. I want children to feel at home when they are in my
              care.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ marginBottom: "20px" }}
          >
            <Grid item xs={11} classes={{ root: classes.gridItem }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://res.cloudinary.com/joshdowns-dev/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1597014214/peace_of_mind/IMG_4023_tx0j5h.jpg"
                  className={classes.aboutImage}
                  alt="At the farm"
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
          >
            <Typography className={classes.bodyText} variant="body1">
              My program has a strong focus on nature. I love being outside and
              exploring all of the wonderful things that nature has to provide.
              In my spare time I enjoy hiking, going for walks, working in my
              gardens, taking my kids to the beach, and spending time with my
              family. I have two fur babies named CJ and Trixie. They are
              mixed-breed old gals who love spending time with all of the kids!
              <br />
              <br />I am constantly continuing my education in Early Childhood
              Education and working towards a degree. I love learning about
              children’s social and emotional development, fine and gross motor
              skills and honoring their strengths. I strive to give them an
              environment that empowers them to learn, discover, and be their
              best selves.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
};

export default About;
