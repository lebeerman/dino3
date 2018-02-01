import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import {Jobdetails} from './components/Jobdetails';
import {Preview} from './components/Preview';
import Inputform from './components/Inputform';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {}
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing = () => {
    return fetch('./listing.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
        console.log(response);
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main>
        <Header />
        <Jobdetails listing={this.state.data} />
        <Inputform />
        <Preview />
        <Footer />
      </main>
    );
  }
}

export default App;
