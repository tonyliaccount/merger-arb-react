import logo from './logo.svg';
import './App.css';

import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, ListGroup, Navbar } from 'react-bootstrap';

function getMarginCallPrice(price, initial_margin, maintenance_margin, type, callback) {
    //fetch('http://localhost:5000/graphql', {
    fetch('https://merger-arb.herokuapp.com/graphql', {
    method: "POST",
    headers: { // Note: This is headers with a 's'. 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ // Note: Query starts and end with backtick!
      query: 
      `mutation { 
        marginCallPrice(
          price: ${price} 
          initial_margin: ${initial_margin} 
          maintenance_margin: ${maintenance_margin} 
          type: ${type}
        ) 
        {
          id 
          price 
          initial_margin 
          maintenance_margin 
          type 
          margin_call_price 
        } 
      }`
    })
  })
    .then(res => res.json())
    .then(res => callback(res.data))
    .catch(console.error)
}

class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: 0.0,
      initial_margin: 0.0,
      maintenance_margin: 0.0,
      type: "LONG",
      price_history : []
    };

    this.afterSubmission = this.afterSubmission.bind(this)
  }

  afterSubmission = (event) => {
    event.preventDefault();

    getMarginCallPrice(this.state.price, this.state.initial_margin, this.state.maintenance_margin, this.state.type, ( {marginCallPrice} ) => {
      if (marginCallPrice) {

        this.setState( prevState => ({
          price_history: [marginCallPrice, ...prevState.price_history]
        }));

      }
    });
  }

  render() {
    return(
      <Container fluid>
        <Form className="mb-3" onSubmit = {this.afterSubmission}>
          <Form.Group className="mb-3">
            <Form.Label>Price:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Amount in dollars" 
              onChange={event => {
                this.setState({
                  price: event.target.value
                });
                }
              } 
            />
            <Form.Text>
              Please enter a non-negative value.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Initial Margin:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Decimal value between 0 and 1"
              onChange={event => {
                this.setState({
                  initial_margin: event.target.value
                });
                }
              } 
            />
            <Form.Text>
              e.g. "0.5" implies a initial margin of 50%
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Maintenance Margin:</Form.Label> 
            <Form.Control type="number" step="any" placeholder="Decimal value between 0 and 1" 
              onChange={event => {
                this.setState({
                  maintenance_margin: event.target.value
                });
                }
              } 
            />
            <Form.Text>
              Note: Maintenance margin cannot be higher than initial margin.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Type:</Form.Label>
            <Form.Control as="select" 
              onChange={event => {
                this.setState({
                  type: event.target.value
                });
                }
              } 
            >
              <option value="LONG">Long</option>
              <option value="SHORT">Short</option>
            </Form.Control>  
          </Form.Group>

          <Form.Group className="mb-6">
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form.Group>
        </Form>

        <ListGroup className="mb-3">
          {
            this.state.price_history.map( (item) => (
              <ListGroup.Item id={item.id} >
                Margin Call Price: ${item.margin_call_price.toFixed(2)}
              </ListGroup.Item>
            ))
          }
        </ListGroup>

      </Container>
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
      
      <InputField>
      </InputField>
    </div>
  );
}

export default App;
