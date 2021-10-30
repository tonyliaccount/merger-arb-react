import logo from './logo.svg';
import './App.css';

import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Navbar } from 'react-bootstrap';

class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.afterSubmission = this.afterSubmission.bind(this)
  }

  afterSubmission = (event) => {
    event.preventDefault();
  }

  render() {
    return(
      <Form onSubmit = {this.afterSubmission}>
          <Form.Group className="mb-3">
            <Form.Label>Price:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Amount in dollars" />
            <Form.Text>
              Please enter a non-negative value.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Initial Margin:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Decimal value between 0 and 1" />
            <Form.Text>
              e.g. "0.5" implies a initial margin of 50%
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Maintenance Margin:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Decimal value between 0 and 1" />
            <Form.Text>
              Note: Maintenance margin cannot be higher than initial margin.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Type:</Form.Label>
            <Form.Control as="select">
              <option value="LONG">Long</option>
              <option value="SHORT">Short</option>
            </Form.Control>  
          </Form.Group>

          <Form.Group className="mb-6">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
    )
  }
}

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
        <InputField>
        </InputField>
      </Container>
    </div>
  );
}

export default App;
