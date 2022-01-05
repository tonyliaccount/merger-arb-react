import './App.css';

import React from 'react'

import { Container, Nav, Navbar, TabContainer, Row, Col, TabContent, TabPane } from 'react-bootstrap';

import CalculateShares from './components/CalculateShares';
import MarginCallPrice from './components/MarginCallPrice';
import AcquisitionArbitrage from './components/AcquisitionArbitrage';
import MergerArbitrage from './components/MergerArbitrage';

function App() {
  return (
    <div className="App">
      
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand>
              <img
                alt=""
                src="finance.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{'  '}
              Merger-Arb
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid v>
          <TabContainer defaultActiveKey="tab-1">
            <Row> 
              <Col sm={3}>
                <Nav variant="pills" className="flex-column pt-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-1">Margin Call Price</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-2">Calculate Shares</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-3">Find Acquisition Arbitrage</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-4">Find Merger Arbitrage</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <TabContent className='pt-3'>
                  <TabPane eventKey="tab-1">
                    <MarginCallPrice/>
                  </TabPane>
                  <TabPane eventKey="tab-2">
                    <CalculateShares/>
                  </TabPane>
                  <TabPane eventKey="tab-3">
                    <AcquisitionArbitrage/>
                  </TabPane>
                  <TabPane eventKey="tab-4">
                    <MergerArbitrage/>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
    </div>
  );
}

export default App;
