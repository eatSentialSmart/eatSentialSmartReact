import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';


const options = [
    { key: '1', text: '1', value: 1 },
    { key: '5', text: '5', value: 5 },
    { key: '10', text: '10', value: 10 },
  ]

class ASForm extends Component {
    render() {
        return (
            <div>
                <Segment attached>
                    <Form>
                        <Form.Input fluid label='Search for Article' placeholder='foodie' />
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Start Year' placeholder='2010' />
                            <Form.Input fluid label='End Year' placeholder='2018' />                           
                        </Form.Group>   
                            <Form.Select fluid label='Number of Article' options={options} placeholder='1' />     
                        <Form.Group widths='equal'>
                            <Form.Button>Submit</Form.Button>       
                            <Form.Button>Clear</Form.Button>                
                        </Form.Group>                                         
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default ASForm; 