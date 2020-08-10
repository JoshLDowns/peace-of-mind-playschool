import React from "react";
import logo from "../styles/src_img/Logo.png";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.mainWrapper}>
        <Grid container spacing={6} alignItems="center" justify="center">
          <Grid item xl={4} lg={4} sm={6} xs={11}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                className={classes.logoLarge}
                alt="Peace of Mind Playschool"
              />
            </div>
          </Grid>
          <Grid item sm={10} xs={11} component={Paper} classes={{root: classes.paperRoot}}>
            <Typography className={classes.bodyText} variant="body1">
              I opened Peace of Mind Playschool in 2018 to provide families with
              high quality, affordable child care with the belief that children
              must be respected, and that children love to learn. I believe in
              providing children with an environment where they have space to
              explore and create, collaborate with peers and learn through
              nature. Nature offers infinite ways to support a child’s
              cognitive, physical, and emotional development, and interacting
              with natural environments and materials allows children to learn
              by doing, and experiment with ideas. When children are engaged in
              learning about science and nature, they are also learning
              strategies for active exploration, thinking and reasoning, and
              developing working theories for making sense of the natural,
              social, physical and material worlds around them. By promoting
              learning through nature, I hope to foster the development of
              nurturing, peaceful, and caring citizens. My program reflects the
              understanding that play and outdoor exploration is essential to
              children’s health and well-being, and foundational to their
              learning. I promise to nurture your child, provide a safe and
              loving environment, and give them the freedom to explore and
              create.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
};

export default Home;
