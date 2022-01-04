import './App.css';

import React from 'react'

import { Container, Nav, Navbar, TabContainer, Row, Col, TabContent, TabPane } from 'react-bootstrap';

import CalculateShares from './components/CalculateShares';
import MarginCallPrice from './components/MarginCallPrice';

function App() {
  return (
    <div className="App">
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              Merger-Arb
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid>
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
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
    </div>
  );
}

export default App;
