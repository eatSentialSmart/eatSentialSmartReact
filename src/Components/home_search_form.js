import React, { Component } from 'react';
import { Segment, Form, Button, Label, Header } from 'semantic-ui-react';

const resOptions = [
    { key: 'sugar-conscious', name: 'Low Sugar', text: 'Low Sugar', value: 'sugar-conscious'},
    { key: 'peanut-free', name: 'No Peanuts', text: 'No Peanuts', value: 'peanut-free' },
    { key: 'tree-nut-free', name: 'No Tree Nuts', text: 'No Tree Nuts', value: 'tree-nut-free' },
    { key: 'alcohol-free', name: 'No Alcohol', text: 'No Alcohol', value: 'alcohol-free' }
  ]

const dietOptions = [
    { key: 'balanced', text: 'Balanced Protein, Fat and Carbs', value: 'balanced'},
    { key: 'high-protein', text: 'High Protein', value: 'high-protein' },
    { key: 'low-fat', text: 'Low Fat', value: 'low-fat' },
    { key: 'low-carbs', text: 'Low Carbs', value: 'low-carbs' }
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

    handleSelect = (e, data) => {
        console.log(data);
        const {name, value} = data;
        const terms = { ...this.state.terms };
        terms[name] = value;
        console.log(`${name}: ${value} - ${typeof(name)}`);
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
                dietaryClass: '',
                selectedDiet: [],
                selectedRes: []
            }
        })
    }

    render() {
        return (
            <div>
                <Segment >
                    <Form>
                        <Segment attached='top'>
                            <Header>Search For Food</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <Form.Input 
                                onChange={this.handleInputChange}
                                value={this.state.terms.foodie}
                                name='foodie'
                                fluid 
                                placeholder='foodie' />
                        </Segment>
                        <Segment attached='top'>
                            <Header>Please select your dietary classification:</Header>
                        </Segment>
                        <Segment attached='bottom'>
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
                        </Segment>
                        <Segment attached='top'>
                            <Header>Add any dietary restrictions or needs:</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <Form.Group widths='equal'>
                                <Form.Select 
                                        multiple
                                        onChange={this.handleSelect}
                                        fluid label='Restrictions'
                                        options={resOptions}
                                        value={this.state.terms.selectedRes}
                                        name='selectedRes' 
                                        placeholder='Low Sugar'/>   
                                <Form.Select
                                        multiple
                                        onChange={this.handleSelect}
                                        fluid label='Dietary Needs'
                                        options={dietOptions}
                                        value={this.state.terms.selectedDiet}
                                        name='selectedDiet' 
                                        placeholder='Balanced'/>                              
                            </Form.Group> 
                        </Segment>
                          
                        <Form.Group widths='equal'>
                            <Form.Button
                                fluid
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

