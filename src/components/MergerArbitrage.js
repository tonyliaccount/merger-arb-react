import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Card } from 'react-bootstrap';

class MergerArbitrage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            days (int): number of days to hold positions
            stocks (list): list of dictionaries containing stocks and their current
            prices
            exchange_rate (float): rate at which stocks of first company will be
            exchanged for stocks of second company.
            margin_interest (float): yearly interest charge for margin purchase and
            short sales.
            commission (float): cost per buy and sell order from broker
            position_size(float): amount of money to wager in trade
            initial_margin(float): initial margin percentage
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
                    <Card.Title>Find Merger Arbitrage</Card.Title>
                    <Card.Text>Given an expected merger transaction, calculate the return of a long short position based on the apparent premium or discount.</Card.Text>
                    <Form onSubmit = {this.afterSubmission}>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>days</Form.Label> 
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
                            <Form.Label>stocks</Form.Label> 
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
                            <Form.Label>prices</Form.Label> 
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
                            <Form.Label>exchange_rate</Form.Label> 
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
                            <Form.Label>position_size</Form.Label> 
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
  } export default MergerArbitrage