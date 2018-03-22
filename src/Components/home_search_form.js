import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class HomeSearch extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Segment attached>
                    <Form>
                        <Form.Input 
                            onChange={this.handleInputChange}
                            value={this.state.terms.foodie}
                            name='foodie'
                            fluid 
                            label='Search for Recipe and Restaurants' 
                            placeholder='foodie' />
                        <Form.Group inline>
                            <label>Size</label>
                            <Form.Radio label='Omnivore' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
                            <Form.Radio label='Vegetarian' value='md' checked={value === 'md'} onChange={this.handleChange} />
                            <Form.Radio label='Vegan' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select
                                onChange={this.handleSelect}
                                fluid label='Number of Article'
                                options={options}
                                value={this.state.terms.selected}
                                name='selected' 
                                placeholder='1'/>   
                            <Form.Select
                                onChange={this.handleSelect}
                                fluid label='Number of Article'
                                options={options}
                                value={this.state.terms.selected}
                                name='selected' 
                                placeholder='1'/>                            
                        </Form.Group>   
                            
                        <Form.Group widths='equal'>
                            <Form.Button
                                onClick={e => this.handleSubmit(e)}>
                                Search
                            </Form.Button>       
                                      
                        </Form.Group>                                         
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default HomeSearch; 

