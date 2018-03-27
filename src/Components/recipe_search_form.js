import React, { Component } from 'react';
import { Segment, Form, Header } from 'semantic-ui-react';

const healthOptions = [
    { key: 'sugar-conscious', text: 'Low Sugar', value: 'sugar-conscious' },
    { key: 'peanut-free', text: 'No Peanuts', value: 'peanut-free' },
    { key: 'tree-nut-free', text: 'No Tree Nuts', value: 'tree-nut-free' },
    { key: 'alcohol-free', text: 'No Alcohol', value: 'alcohol-free' },
    // { key: 'dairy-free', text: 'Dairy Free', value: 'dairy-free' },
    // { key: 'egg-free', text: 'Egg Free', value: 'egg-free' },
    // { key: 'pescatarian', text: 'Pescatarian', value: 'pescatarian' },
    // { key: 'gluten-free', text: 'Gluten Free', value: 'gluten-free' },
    { key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
    { key: 'vegan', text: 'Vegan', value: 'vegan' },

]

const dietOptions = [
    { key: 'balanced', text: 'Balanced Protein, Fat and Carbs', value: 'balanced' },
    { key: 'high-protein', text: 'High Protein', value: 'high-protein' },
    // { key: 'high-fiber', text: 'High Fiber', value: 'high-fiber' },
    { key: 'low-fat', text: 'Low Fat', value: 'low-fat' },
    { key: 'low-carb', text: 'Low Carbs', value: 'low-carb' },
    // { key: 'low-sodium', text: 'Low Sodium', value: 'low-sodium' }
]

class RecipeSearch extends Component {
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
        const { name, value } = data;
        const terms = { ...this.state.terms };
        terms[name] = value;
        console.log(`${name}: ${value} - ${typeof (name)}`);
        this.setState({
            terms
        })
    }

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        const terms = { ...this.state.terms };
        terms[name] = value;
        this.setState({
            terms
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchTermChange(this.state.terms)
    };

    handleClear = (e) => {
        e.preventDefault();
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
                <Segment attached='top'>
                    <Header>Search For Food Recipes</Header>
                </Segment>
                <Segment attached='bottom'>
                    <Form>
                        <Form.Input
                            onChange={this.handleInputChange}
                            value={this.state.terms.foodie}
                            name='foodie'
                            fluid
                            placeholder='Food'
                            required />

                        <Header>Add any dietary restrictions or needs:</Header>

                        <Form.Group widths='equal'>
                            <Form.Select
                                onChange={this.handleSelect}
                                fluid label='Health Restrictions:'
                                options={healthOptions}
                                value={this.state.terms.selectedRes}
                                name='selectedRes'
                                placeholder='Low Sugar' />
                            <Form.Select
                                required
                                onChange={this.handleSelect}
                                fluid label='Dietary Needs:'
                                options={dietOptions}
                                value={this.state.terms.selectedDiet}
                                name='selectedDiet'
                                placeholder='Balanced' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Button
                                fluid
                                disabled={!this.state.terms.foodie}
                                onClick={e => this.handleSubmit(e)}>
                                Search
                            </Form.Button>
                            <Form.Button
                                fluid
                                onClick={e => this.handleClear(e)}>
                                Clear
                            </Form.Button>
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default RecipeSearch;

