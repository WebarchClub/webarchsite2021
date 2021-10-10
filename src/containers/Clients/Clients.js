import React from "react";
import { Container, Row, Col,Hidden } from 'react-grid-system';
import './Clients.css';

const Clients = () => {

  return (
<Container fluid>

  <Row align="stretch" style={{ height: '220px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
    <Hidden sm xs><Col debug>3 of 3</Col></Hidden>
  </Row>

  <Row align="stretch" style={{ height: '220px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
    <Hidden sm xs><Col debug>3 of 3</Col>
    <Col debug>3 of 3</Col></Hidden>
  </Row>
<Hidden xxl xl lg md>
  <Row align="stretch" style={{ height: '220px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  </Hidden>
</Container>
  )}
export default Clients;