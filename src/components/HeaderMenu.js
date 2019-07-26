import React from 'react';
// import Avatar from './Avatar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import logo from '../logo.png'; 

import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  
    logo: {
        width: 50,
    },
  });

export default function SimpleMenu() {

    const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="row"
    justify="center"
    alignItems="center">
    
    <NavLink to="/" exact >
    <img className={classes.logo} src={logo} alt="Logo" />
      </NavLink>
        <NavLink to="/report" >
      <Button aria-controls="simple-menu" aria-haspopup="true" >
      Report
      </Button>
      </NavLink>
      <NavLink to="/reporthistory" >
      <Button aria-controls="simple-menu" aria-haspopup="true" >
      Report History
      </Button>
      </NavLink>
      <NavLink to="/pricing" >
      <Button aria-controls="simple-menu" aria-haspopup="true" >
      Pricing
      </Button>
      </NavLink>
  <NavLink to="/login" >
      <Button aria-controls="simple-menu" aria-haspopup="true" >
      Login
      </Button>
      </NavLink>
   
      <NavLink to="/register" >
      <Button aria-controls="simple-menu" aria-haspopup="true" >
      Register
      </Button>
      </NavLink>
      <NavLink to="/account" >
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="@fitness.4you"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {"0 credits"}
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
  
      </NavLink>

   </Grid>
  )
}