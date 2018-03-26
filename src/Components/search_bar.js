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
        event.preventDefault();
        this.props.onSearchTermChange(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <Input
                required
                onChange={e => this.onInputChange(e)}
                value={this.state.term}
                type='text'
                placeholder='Search...'
                action>
                <input />
                <Button
                    disabled={!this.state.term}
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