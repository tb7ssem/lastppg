import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, IconButton } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    marginTop: "auto",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              TUNIJAD SHOP is your one-stop shop for all electronic needs. We
              offer a wide range of products and services to meet your tech
              requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              to="/"
              className={classes.link}>
              Home
            </Typography>
            <br />
            <Typography
              variant="body2"
              component={Link}
              to="/categories"
              className={classes.link}>
              Categories
            </Typography>
            <br />
            <Typography
              variant="body2"
              component={Link}
              to="/promotions"
              className={classes.link}>
              Promotions
            </Typography>
            <br />
            <Typography
              variant="body2"
              component={Link}
              to="/adsl"
              className={classes.link}>
              Vente ADSL
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@tunijadshop.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: 58 888 757 / 58 88 06 05
            </Typography>
            <div className={classes.socialIcons}>
              <IconButton aria-label="facebook" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton aria-label="instagram" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton aria-label="twitter" color="inherit">
                <Twitter />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: "2rem" }}>
          © {new Date().getFullYear()} TUNIJAD SHOP. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
