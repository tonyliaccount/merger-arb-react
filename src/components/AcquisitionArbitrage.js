import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Card } from 'react-bootstrap';

class AcquisitionArbitrage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            share_price (float): current price of the stock
            acquire_price (float): acquisition price of the stock
            days (int): number of days until acquisition
            initial_margin (float): percentage of initial trade you must put up
            margin_interest (float): interest percentage to pay on
            commission (float): cost to sell or buy stocks
            buying_power (float): total leveraged buying power
            */

      };
  
      // Prevent the default behaviour of refreshing the page after clicking the "Submit" button.
      this.afterSubmission = this.afterSubmission.bind(this);
    }
    
    render() {
      return(
        <Container className="p-0">
            <Card>
                <Card.Header>Description</Card.Header>
                <Card.Body>
                    
                    
                    <Card.Title>Find Acquisition Arbitrage</Card.Title>
                    <Card.Text>If an acquisition is being made and the acquisition price is different from the current price, long or short and arb the difference.</Card.Text>

                    <Form onSubmit = {this.afterSubmission}>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>share_price</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    long_price: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3">
                            <Form.Label>acquire_price</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    short_price: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3">
                            <Form.Label>days</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    buying_power: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3">
                            <Form.Label>initial_margin</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    long_short_rate: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>margin_interest</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    long_short_rate: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>commission</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    long_short_rate: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>buying_power</Form.Label> 
                            <Form.Control type="number" step="any" placeholder="" 
                                onChange={event => {
                                this.setState({
                                    long_short_rate: event.target.value
                                });
                                }
                                } 
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>
            
                        <Form.Group className="mb-6">
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
      )
    }
  
    afterSubmission = (event) => {
      event.preventDefault();
    }
  } export default AcquisitionArbitrage