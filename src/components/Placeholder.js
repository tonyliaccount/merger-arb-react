import React from 'react';

import { Container, Card } from 'react-bootstrap';

class Placeholder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <Container className="p-0">
                <Card>
                    <Card.Img variant="top" src="not_done.svg" />
                </Card>
            </Container>

        )
    }

    afterSubmission = (event) => {
        event.preventDefault();
    }

} export default Placeholder
