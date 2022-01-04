import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

class CalculateShares extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        long_price: 0.0,
        short_price: 0.0,
        buying_power: 0.0,
        long_short_rate: 0.0
      };
  
      // Prevent the default behaviour of refreshing the page after clicking the "Submit" button.
      this.afterSubmission = this.afterSubmission.bind(this);
    }
  
    render() {
      return(
        <Container fluid>
          <Form onSubmit = {this.afterSubmission}>
            
            <Form.Group className="mb-3">
              <Form.Label>Long Price:</Form.Label> 
              <Form.Control type="number" step="any" placeholder="Amount in dollars" 
                onChange={event => {
                  this.setState({
                    long_price: event.target.value
                  });
                  }
                } 
              />
              <Form.Text>Price of the stock to long.</Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Short Price:</Form.Label> 
              <Form.Control type="number" step="any" placeholder="Amount in dollars" 
                onChange={event => {
                  this.setState({
                    short_price: event.target.value
                  });
                  }
                } 
              />
              <Form.Text>Price of the stock to short.</Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Buying Power:</Form.Label> 
              <Form.Control type="number" step="any" placeholder="Amount in dollars" 
                onChange={event => {
                  this.setState({
                    buying_power: event.target.value
                  });
                  }
                } 
              />
              <Form.Text>Amount of money investor can leverage.</Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Long-Short Rate:</Form.Label> 
              <Form.Control type="number" step="any" placeholder="Decimal value between 0 and 1" 
                onChange={event => {
                  this.setState({
                    long_short_rate: event.target.value
                  });
                  }
                } 
              />
              <Form.Text>e.g. "0.5" implies a rate of 50%</Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-6">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      )
    }
  
    afterSubmission = (event) => {
      event.preventDefault();
    }
  } export default CalculateShares