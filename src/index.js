import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, Switch, browserHistory} from 'react-router-dom';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './reducers'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Predict from './containers/Predict';
import App from './components/App';
import Home from './components/Home';
import createHashHistory from 'history/createHashHistory';

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware));

const history = createHashHistory();

render(
    <Provider store={store}>
    <Router history={history}>
        <Switch component={App}>
            <Route path='/' component={Home}/>
            <Route path='/predict' component={Predict}/>
            <Route path='/predict/:url' component={Predict}/>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'))
