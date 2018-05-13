import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Link to='/predict/https:%2f%2fi.imgur.com%2ffiQvgDe.jpg'><Image src='https://i.imgur.com/fiQvgDe.jpg' responsive/></Link>
          </Col>
          <Col xs={6} md={4}>
            <Link to='/predict/https:%2f%2fi.imgur.com%2fpmmlRME.jpg'><Image src='https://i.imgur.com/pmmlRME.jpg' responsive/></Link>
          </Col>
          <Col xs={6} md={4}>
            <Link to='/predict/https:%2f%2fi.imgur.com%2fbX2Uk7C.jpg'><Image src='https://i.imgur.com/bX2Uk7C.jpg' responsive/></Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;