import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
  avatar: {
    margin: 0,
  },
  
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    
      <Avatar alt="Remy Sharp" src="../1.jpg" className={classes.avatar} />
   
  );
}