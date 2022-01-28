import React from 'react';

import { Toast } from 'react-bootstrap';

class ResponseToast extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };

        // Prevent the default behaviour of refreshing the page after clicking the "Submit" button.
        this.afterSubmission = this.afterSubmission.bind(this);
    }

    render() {
        return (

            <Toast className="Toast-Properties">
                <Toast.Header closeButton>
                    
                    <strong className="me-auto">Bootstrap</strong>
                    <small>18 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        )
    }

    afterSubmission = (event) => {
        event.preventDefault();
      
    }
} export default ResponseToast