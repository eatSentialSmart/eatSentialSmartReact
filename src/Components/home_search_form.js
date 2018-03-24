import React, { Component } from 'react';
import { Segment, Form, Button, Label, Header } from 'semantic-ui-react';

const healthOptions = [
    { key: 'sugar-conscious', text: 'Low Sugar', value: 'sugar-conscious'},
    { key: 'peanut-free', text: 'No Peanuts', value: 'peanut-free' },
    { key: 'tree-nut-free', text: 'No Tree Nuts', value: 'tree-nut-free' },
    { key: 'alcohol-free', text: 'No Alcohol', value: 'alcohol-free' },
    { key: 'dairy-free', text: 'Dairy Free', value: 'dairy-free' },
    { key: 'egg-free', text: 'Egg Free', value: 'egg-free' },
    { key: 'fish-free', text: 'Fish Free', value: 'fish-free' },
    { key: 'gluten-free', text: 'Gluten Free', value: 'gluten-free' },
    { key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
    { key: 'vegan', text: 'Vegan', value: 'vegan' },

  ]

const dietOptions = [
    { key: 'balanced', text: 'Balanced Protein, Fat and Carbs', value: 'balanced'},
    { key: 'high-protein', text: 'High Protein', value: 'high-protein' },
    { key: 'high-fiber', text: 'High Fiber', value: 'high-fiber' },
    { key: 'low-fat', text: 'Low Fat', value: 'low-fat' },
    { key: 'low-carbs', text: 'Low Carbs', value: 'low-carbs' },
    { key: 'low-sodium', text: 'Low Sodium', value: 'low-sodium' }
  ]

class HomeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            terms: {
                foodie: '',
                dietaryClass: '',
                selectedDiet: '',
                selectedRes: ''
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
                selectedDiet: '',
                selectedRes: ''
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
                        {/* <Segment attached='top'>
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
                        </Segment> */}
                        <Segment attached='top'>
                            <Header>Add any dietary restrictions or needs:</Header>
                        </Segment>
                        <Segment attached='bottom'>
                            <Form.Group widths='equal'>
                                <Form.Select 
                                        
                                        onChange={this.handleSelect}
                                        fluid label='Health Restrictions'
                                        options={healthOptions}
                                        value={this.state.terms.selectedRes}
                                        name='selectedRes' 
                                        placeholder='Low Sugar'/>   
                                <Form.Select
                                        
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
                    {/* <div>radio: {this.state.terms.dietaryClass}</div>
                    <div>{this.state.terms.value}</div>
                    <div>{this.state.value}</div>
                    <div>restriction: {this.state.terms.selectedRes}</div>
                    <div>diet: {this.state.terms.selectedDiet}</div>
                    <div>{this.state.terms.foodie}</div> */}
                </Segment>
            </div>
        )
    }
}

export default HomeSearch; 

