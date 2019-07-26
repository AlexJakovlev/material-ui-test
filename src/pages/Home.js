import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
       alignItems: 'left',
  },
  title: {
    margin: theme.spacing(3, 0, 0, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: theme.spacing(3),
  },
  submit: { 
    // margin: theme.spacing(3, 0, 2),
  },
  textField: {
    //   marginBottom: theme.spacing(3),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ height: '60vh' }}>
      <CssBaseline />
      <Box > 
      <Typography component="h1" variant="h5" className={classes.title}>
        Analyze any Instagram account for fake followers and engagements
        </Typography>
      </Box>
      <Box
        bgcolor="background.paper"
        m={1}
        p={1}
        className={classes.paper}
      >            
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="Enter Instagram account"
            name="username"
            autoFocus
          />
           <Link to="/report">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
             
              <Typography component="h1" variant="h5">
              Check
        </Typography>  
                
          </Button>
         </Link>  
        </form>
      </Box>
      </Container>
    </React.Fragment>
  );
}