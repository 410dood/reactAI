import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './clarifai/reducers'
import Navigation from './clarifai/components/Navigation';
import Footer from './clarifai/components/Footer';
import Predict from './clarifai/containers/Predict';
import App from './clarifai/components/App';
import Home from './clarifai/components/Home';

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware));

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <Router history={history}>
        <Route component={App}>
            <Route path='/' component={Home}/>
            <Route path='/predict' component={Predict}/>
            <Route path='/predict/:url' component={Predict}/>
        </Route>
    </Router>
</Provider>, document.getElementById('root'))
