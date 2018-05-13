import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clarifai from 'clarifai'

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

ReactDOM.render(
    <Router>
    <div>
        <Route exact path='/' component={Navigation}/>
    </div>
</Router>, document.getElementById('root'));