import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  title: {
    flexGrow: 1
  },
  link: {
      color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QRCode Generator
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} href="https://github.com/ma-9" target="_blank">
            <GitHubIcon />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
