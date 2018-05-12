import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

import AI from './components/AI/AI';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import PicLinker from './components/PicLinker/PicLinker';
import Rank from './components/Rank/Rank';
import Home from './components/Home/Home';
import FileUpload from './components/FileUpload/FileUpload';

import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/Register'}>Register</Link>
            </li>
            <li>
              <Link to={'/Signin'}>Signin</Link>
            </li>
            <li>
              <Link to={'/Rank'}>Rank</Link>
            </li>
            <li>
              <Link to={'/PicLinker'}>PicLinker</Link>
            </li>
            <li>
              <Link to={'/FileUpload'}>FileUpload</Link>
            </li>
            <li>
              <Link to={'/ImageLinkForm'}>ImageLinkForm</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Register' component={Register}/>
            <Route path='/PicLinker' component={Signin}/>
            <Route path='/Rank' component={Rank}/>
            <Route path='/PicLinker' component={PicLinker}/> {/* <Route path='/AI' component={AI}/> */}
            <Route path='/FileUpload' component={FileUpload}/>
            <Route path='/ImageLinkForm' component={ImageLinkForm}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export default App;