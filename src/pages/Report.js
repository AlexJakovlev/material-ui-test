import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const getIdFromProps = props => props.match.params.id;

export default class ReportPage extends Component {
  state = { article: null };

  componentDidMount() {
   
  }

  

  render() {
    const { article } = this.state;

    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }} >
          sdf.kldsf;l
        </Typography>
      </Container>
    </React.Fragment>
    );
  }
}