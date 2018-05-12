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
import './App.css';

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
              <Link to={'/AI'}>AI</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Register' component={Register}/>
            <Route path='/PicLinker' component={Signin}/>
            <Route path='/Rank' component={Rank}/>
            <Route path='/PicLinker' component={PicLinker}/>
            <Route path='/AI' component={AI}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// const particlesOptions = {   particles: {     number: {       value: 30,
// density: {         enable: true,         value_area: 800       }     }   } }
// const initialState = {   input: '',   imageUrl: '',   box: {},   route:
// 'signin',   isSignedIn: true, //changed to false for deploy   user: {     id:
// '',     name: '',     email: '',     entries: 0,     joined: ''   } } class
// App extends Component {   constructor() {     super();     this.state =
// initialState;   }   loadUser = (data) => {     this.setState({       user: {
// id: data.id,         name: data.name,         email: data.email, entries:
// data.entries,         joined: data.joined       }     })   }
// calculateFaceLocation = (data) => {     const clarifaiFace =
// data.outputs[0].data.regions[0].region_info.bounding_box;     const image =
// document.getElementById('inputImage');     const width = Number(image.width);
//     const height = Number(image.height);     return {       leftCol:
// clarifaiFace.left_col * width,       topRow: clarifaiFace.top_row * height,
// rightCol: width - (clarifaiFace.right_col * width),       bottomRow: height
// - (clarifaiFace.bottom_row * height)     }   }   displayFaceBox = (box) => {
// this.setState({box: box})   }   onInputChange = (event) => {
// this.setState({input: event.target.value});   }   onButtonSubmit = () => {
// this.setState({imageUrl: this.state.input})
// fetch('http://localhost:3001/imageurl', {       method: 'post', headers: {
// 'Content-Type': 'application/json'       },         body:
// JSON.stringify({input: this.state.input})       })       .then(response =>
// response.json())       .then(response => {         if (response) {
// fetch('http://localhost:3001/image', {             method: 'put', headers: {
//     'Content-Type': 'application/json'             }, body:
// JSON.stringify({id: this.state.user.id})             }) .then(response =>
// response.json())             .then(count => {
// this.setState(Object.assign(this.state.user, {entries: count}))      })
// .catch(console.log)         }
// this.displayFaceBox(this.calculateFaceLocation(response))       }) .catch(err
// => console.log(err));   }   onRouteChange = (route) => {     if (route ===
// 'signout') {       this.setState(initialState)     } else if (route ===
// 'home') {       this.setState({isSignedIn: true})     } this.setState({route:
// route});   }   render() {     const {isSignedIn, imageUrl, route, box} =
// this.state;     return (       <div className="App">        <Particles
// className='particles' params={particlesOptions}/> <Nav
// isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> {route ===
// 'home'           ? <div>               <Logo/>               <Rank
// name={this.state.user.name} entries={this.state.user.entries}/> <PicLinker
// onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> <AI
// box={box} imageUrl={imageUrl}/>             </div>  : (route === 'signin'
// ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
// <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>) }
// </div>     );   } }

export default App;