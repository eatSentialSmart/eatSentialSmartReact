import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';


const options = [
    { key: '1', name: '1', text: '1', value: 1},
    { key: '5', name: '5', text: '5', value: 5 },
    { key: '10', name: '10', text: '10', value: 10 },
  ]

class ASForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: {}
        }

    }
   
    handleSelect = (e, data) => {
        const { name, value } = data;
        const terms = { ...this.state.terms };
        terms[name] = value;

        this.setState({
            terms
        })
    }

    handleInputChange = ({target}) => {

        const { name, value } = target;
        const terms = { ...this.state.terms };
        terms[name] = value;
      
        this.setState({
          terms
        });
      };

      handleSubmit = () => {
        this.props.onSearchTermChange(this.state.terms);
    }

    render() {
        return (
            <div>
                <Segment attached>
                    <Form>
                        <Form.Input 
                            onChange={this.handleInputChange}
                            value={this.state.terms.foodie}
                            name='foodie'
                            fluid 
                            label='Search for Article' 
                            placeholder='foodie' />
                        <Form.Group widths='equal'>
                            <Form.Input 
                                onChange={this.handleInputChange}
                                value={this.state.terms.startYear}
                                name='startYear'
                                fluid label='Start Year' placeholder='2010' />
                            <Form.Input 
                                onChange={this.handleInputChange}
                                value={this.state.terms.endYear}
                                name='endYear' 
                                fluid label='End Year' placeholder='2018' />                           
                        </Form.Group>   
                            <Form.Select
                                onChange={this.handleSelect}
                                fluid label='Number of Article'
                                options={options}
                                value={this.state.terms.selected}
                                name='selected' 
                                placeholder='1'/>   
                        <Form.Group widths='equal'>
                            <Form.Button
                                onClick={e => this.handleSubmit(e)}>
                                Submit
                            </Form.Button>       
                            <Form.Button
                                onClick={this.handleClear}>
                                Clear
                            </Form.Button>                
                        </Form.Group>                                         
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default ASForm; 