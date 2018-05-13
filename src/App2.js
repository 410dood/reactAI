import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

import AI from './components/AI/AI';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
//import PicLinker from './components/PicLinker/PicLinker';
import Rank from './components/Rank/Rank';
import Home from './components/Home/Home';
import FileUpload from './components/FileUpload/FileUpload';

import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router-dom';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './reducers'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Predict from './containers/Predict';
import App from './components/App';
import Home from './components/Home';
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
            <li>
              <Link to={'/predict'}>ImageLinkForm</Link>
            </li>
            <li>
              <Link to={'/predict/:url'}>ImageLinkForm</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Signin' component={Signin}/>
            <Route path='/Rank' component={Rank}/>
            <Route path='/PicLinker' component={PicLinker}/> {/* <Route path='/AI' component={AI}/> */}
            <Route path='/FileUpload' component={FileUpload}/>
            <Route path='/ImageLinkForm' component={ImageLinkForm}/>
            <Route path='/predict' component={Predict}/>
            <Route path='/predict/:url' component={Predict}/>

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

const CLARIFAI_API_KEY = 'bcdc87e24b314c9d9d4dae72d641b65b';

const PicLinker = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='f3'>
        {'enter image'}
      </p>
      <div className='center'>
        <div className="form center pa4 br3 shadow-5">
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-green'
            onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );

  const app = new Clarifai.App({apiKey: 'c4b8b617923e4e14b62e7a8a8ed7fc05'});

  class App extends Component {
    constructor() {
      super();
      this.state = {
        imageUrl: ""
      }
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app
      .models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: {
              "Content-Type": "application/json"
            },
              body: JSON.stringify({id: this.state.user.id})
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
        }
        this.displayFaceBox(this.claculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
}
export default App;