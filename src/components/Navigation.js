import React, { Component } from 'react';
import {Link} from 'react-router';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Clarifai Demo</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Navigation;