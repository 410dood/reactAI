import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import Results from '../Results/Results';
import './asian.css';
import appearance from '../Results/Results'
// const Example = (props) => {     return (         <div> <Jumbotron fluid>
// <Container fluid>                     <h1 className="display-3">ASIAN</h1>
// </Container> </Jumbotron> </div>     ); }; export default Example;

const Asian = (props) => {
    const {appearance} = props;
    console.log(appearance)
    if (appearance !== 'asian') 
        return (null);
    else 
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">ASIAN</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
;

export default Asian;

// ); for (var i = 0; i < links.length; i++) {     if
// (pattern.test(links[i].textContent)) {         links[i] .classList
// .add("distinguish");     } }