import React, { Component } from 'react';
import { Segment, Form, Button, Label, Radio } from 'semantic-ui-react';

const resOptions = [
    { key: '1', name: '1', text: '1', value: 1},
    { key: '5', name: '5', text: '5', value: 5 },
    { key: '10', name: '10', text: '10', value: 10 },
  ]

const dietOptions = [
    { key: '1', name: '1', text: '1', value: 'high-protein'},
    { key: '5', name: '5', text: '5', value: 'low-fat' },
    { key: '10', name: '10', text: '10', value: 'low-cards' },
  ]

class HomeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            terms: {
                foodie: '',
                dietaryClass: '',
                selectedDiet: [],
                selectedRes: []
            }
        }

    }

    handleClick = (e, data) =>{ 
        console.log(data);
        const name = [...data.name]
        
        this.setState({
            
        });
    }
   
    handleSelect = (e, data) => {
        console.log(data);
        const {name, value} = data;
        const terms = { ...this.state.terms };
        terms[name] = value;
        console.log(`${name}: ${typeof(name)}`);
        console.log(typeof(terms));
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
        this.setState({
            terms: {
                foodie: '',
                startYear: '',
                endYear: '',
                selected: ''
            }
        })
    }

    render() {
        return (
            <div>
                <Segment >
                    <Form>
                        <Form.Input 
                            onChange={this.handleInputChange}
                            value={this.state.terms.foodie}
                            name='foodie'
                            fluid 
                            label='Search for Food' 
                            placeholder='foodie' />
                            <Label basic>Please select your dietary classification</Label>
                        <Form.Group inline widths='equal'>
                            
                            <Form.Radio
                                label='Omnivore'
                                name='dietaryClass'
                                value='omnivore'
                                checked={this.state.terms.dietaryClass==='omnivore'}
                                onChange={this.handleSelect}
                                 />
                            <Form.Radio
                                label='Vegetarian'
                                name='dietaryClass'
                                value='vegetarian'
                                checked={this.state.terms.dietaryClass==='vegetarian'}
                                onChange={this.handleSelect}
                                 />
                            <Form.Radio
                                label='Vegan'
                                name='dietaryClass'
                                value='vegan'
                                checked={this.state.terms.dietaryClass==='vegan'}
                                onChange={this.handleSelect}
                                 />
                        </Form.Group>     
                        <Form.Group widths='equal'>
                            <Form.Select 
                                    multiple
                                    onChange={this.handleSelect}
                                    fluid label='Restrictions'
                                    options={resOptions}
                                    value={this.state.terms.selectedRes}
                                    name='selectedRes' 
                                    placeholder='1'/>   
                            <Form.Select
                                    multiple
                                    onChange={this.handleSelect}
                                    fluid label='Dietary Needs'
                                    options={dietOptions}
                                    value={this.state.terms.selectedDiet}
                                    name='selectedDiet' 
                                    placeholder='1'/>                              
                        </Form.Group>   
                        <Form.Group widths='equal'>
                            <Form.Button
                                onClick={e => this.handleSubmit(e)}>
                                Search
                            </Form.Button>       
                                      
                        </Form.Group>                                         
                    </Form>
                    <div>radio: {this.state.terms.dietaryClass}</div>
                    <div>{this.state.terms.value}</div>
                    <div>{this.state.value}</div>
                    <div>restriction: {this.state.terms.selectedRes}</div>
                    <div>diet: {this.state.terms.selectedDiet.join()}</div>
                    <div>{this.state.terms.foodie}</div>
                </Segment>
            </div>
        )
    }
}

export default HomeSearch; 

