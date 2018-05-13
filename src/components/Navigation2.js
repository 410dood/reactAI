import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav/Nav';
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Logo from './Logo/Logo';
import Rank from './Rank/Rank';
import Home from './Home/Home';
import FileUpload from './FileUpload/FileUpload';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/'>HeavyDoodyAI</Link>
                <Link to={'/Register'}>Register</Link>
                <Link to={'/Signin'}>Signin</Link>
                <Link to={'/Rank'}>Rank</Link>
                <Link to={'/PicLinker'}>PicLinker</Link>
                <Link to={'/FileUpload'}>FileUpload</Link>
                <Link to={'/ImageLinkForm'}>ImageLinkForm</Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>;
          <Switch >
            <Route exact path='/' component={Home}/>
            < Route path='/Register' component={Register}/>
            <Route path='/Signin' component={Signin}/>
            < Route path='/Rank' component={Rank}/>
            <Route path='/PicLinker' component={PicLinker}/> {/* <Route path='/AI' component={AI}/> */}
            < Route path='/FileUpload' component={FileUpload}/>
            <Route path='/ImageLinkForm' component={ImageLinkForm}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Navigation