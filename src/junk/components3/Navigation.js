import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home/Home';
import Main from './FileUpload/FileUpload.js';
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

                                <Link to={'/Main'}>FileUpload</Link>
                                <Link to={'/ImageLinkForm'}>ImageLinkForm</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>;
                    <Switch >
                        <Route exact path='/' component={Home}/>
                        <Route path='/FileUpload' component={Main}/> {/* <Route path='/AI' component={AI}/> */}
                        <Route path='/ImageLinkForm' component={ImageLinkForm}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Navigation