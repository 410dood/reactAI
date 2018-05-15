import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/face-recognition';
import SignIn from './components/signin/sign-in';
import Register from './components/register/register';
import Demographic from './components/Demographic/Demographic'
import Asian from './components/asian/asian'

// clarifai API Key
const API_KEY = 'bcdc87e24b314c9d9d4dae72d641b65b';

const app = new Clarifai.App({ apiKey: API_KEY });

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageURL: '',
      results: '',
      box: {},
      route: 'signin',
      isSignedIn: true
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  calculateFaceLocation = (response) => {
    const box = response.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      leftCol: box.left_col * 100 + "%",
      topRow: box.top_row * 100 + "%",
      rightCol: (1 - box.right_col) * 100 + "%",
      bottomRow: (1 - box.bottom_row) * 100 + "%"
    }
  }

  onButtonSubmit = (event) => {
    this.setState({ imageURL: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))).catch(err =>
          console.log(err));
    app
      .models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(response => {
        console.log(response);
        console.log(response.outputs[0].data);
        console.log(response.outputs[0].data.regions[0].data.face);
        console.log(response.outputs[0].data.regions[0].data.face.age_appearance);
        console.log(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name);
        console.log(response.outputs[0].data.regions[0].data.face.gender_appearance);
        console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name);

        console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance);
        console.log(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name);
        this.displayResults(response);

        this.displayFaceBox(this.calculateFaceLocation(response));
        const appearance = (response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name);

      });

  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  displayResults = (response) => {
    this.setState({ results: response.outputs[0].data.regions[0].data.face });
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange} />
        <Particles className='particles' params={particlesOptions} /> {this.state.route === 'home'
          ? <div>
            <Logo />
            <Asian />
            <ImageLinkForm
              onButtonSubmit={this.onButtonSubmit}
              onInputChange={this.onInputChange} />
            <Demographic
              results={this.state.results}
              box={this.state.box}
              imageURL={this.state.imageURL} />
          </div>
          : (this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />)
        }
      </div>
    );
  }
}

export default App;
