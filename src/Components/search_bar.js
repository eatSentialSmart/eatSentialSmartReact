import React, { Component } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        
    }

    handleSubmit = (event) => {
        this.props.onSearchTermChange(this.state.term);
        this.setState({ term: ''});
    }
    
    render() {
        return (
            <Input
                onChange={e => this.onInputChange(e)}
                value={this.state.term}
                type='text'
                placeholder='Search...'
                action>
                <input />
                <Button
                    onClick={e => this.handleSubmit(e)}
                    type='submit'
                    animated>
                    <Button.Content visible>Search</Button.Content>
                    <Button.Content hidden>
                        <Icon name='youtube' /> YouTube
                    </Button.Content>
                </Button>
            </Input>
        )
    }
}

export default SearchBar;