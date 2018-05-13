import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './reducers'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Predict from './containers/Predict';
import App from './components/App';
import Home from './components/Home';

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
