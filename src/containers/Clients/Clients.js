import React from "react";
import { Container, Row, Col, Hidden } from 'react-grid-system';
import './clients.css';
import './logo.png'

const Clients = () => {

  return (
<Container>
    <div class="text-center">
  <Row align="center"  debug>
    <Hidden sm xs><Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug ><img  style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md xs><Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug ><img  style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md sm><Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug ><img  style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
  </Row>

  <Row align="center" debug>
  <Hidden sm xs><Col  style={{ height: '180px' , width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col style={{ height: '180px'  , width: '190px', margin:'1.2rem'}}  debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md xs><Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug ><img  style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md sm><Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug ><img  style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
  </Row>
  <Row align="center"debug>
  <Hidden sm xs><Col  style={{ height: '180px', width: '190px' , margin:'1.2rem'}} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '180px', width: '190px', margin:'1.2rem' }} debug><img style={{ height: '180px', width: '190px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md xs><Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug ><img  style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '120px', width: '120px', margin:'1.2rem' }} debug><img style={{ height: '120px', width: '120px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
    <Hidden xxl xl lg md sm><Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug ><img  style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col>
    <Col  style={{ height: '80px', width: '80px', margin:'1rem' }} debug><img style={{ height: '80px', width: '80px' }} src="./logo.png" alt="logo"></img></Col></Hidden>
  </Row>
  </div>
</Container>
  )}
export default Clients;
