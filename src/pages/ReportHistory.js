/* eslint-disable */
import React, { Component } from 'react';


const categories = [
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];



export default class ArticlesPage extends Component {
  state = { items: [] };

  componentDidMount() {
  
  }

  componentDidUpdate(prevProps, prevState) {
  
   
  }

  handleCategoryChange = opt => {
    if (opt) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${opt.value}`,
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: '',
    });
  };

  render() {
    const { items } = this.state;
   

    return (
      <div>
        <h1>Articles Page</h1>
       
      </div>
    );
  }
}
