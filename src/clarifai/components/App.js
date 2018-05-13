import React, { Component } from 'react';
import {Link} from 'react-router';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;