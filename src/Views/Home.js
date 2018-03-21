import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Segment
} from 'semantic-ui-react';
import axios from 'axios';


// const apiRecKey = "d2cd01518cc9bb800dbf181c4c01d203";
// const apiRecID = "da8cf82c";
const apiRecKey = "e8b036bdd9a6347775ea2c30690c2d94";
const apiRecID = "7cd61c30";


const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='eatSentialSmart'

            style={{
                fontSize: mobile ? '2.4em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '2.1em' : '1em',
            }}
        />
        <Header
            as='h2'
            content='A smarter way to eat'

            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '0.5em' : '1em',
            }}
        />
        <Button animated color="orange" size="huge" style={{ marginTop: '0.5em' }}>
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>
                <Icon name='right arrow' />
            </Button.Content>
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}



export default class Home extends Component {
    
    componentDidMount() {
         //SEARCH INPUT;
        let searchFood ='cake';

        //INDEX DISPLAY TOTAL = 20;
        let fromIndex = 0;
        let toIndex = 20;

        //CALORIE INPUT;
        const caloriesMin = 'gte%0';
        const caloriesMax = 'lte%20722';

        //HEALTH INPUT FUNCTION (VEGATARIAN, VEGAN, OMNIVORE);
        let health = 'Omnivore';
        console.log(health);

        //HEALTH RESTRICTION FUNCTION
        let restrictions = 'low sugar';
        console.log(restrictions);
        //HEALTH DEFICIENCES FUNCTION
        let diet = 'high protein';
        console.log(diet);

        //JSONP CALLBACK FUNCTION
        let callback = "?";
        
        let queryURLRec = `https://api.edamam.com/search?q=${searchFood}&app_id=${apiRecID}&app_key=${apiRecKey}&from=${fromIndex}&to=${toIndex}&calories='gte%0,%20lte%20722'&health=${health}${restrictions}&callback=food`;
        axios({
            url: queryURLRec,
            method: 'GET',
            jsonpCallback: "food",
            dataType: "jsonp",
        }).then( res=> {
            console.log(res);
            console.log(res.data);
        }).done(Response => {
            console.log(Response);
        })
    }

    render(){
        return(
            <div>
                <HomepageHeading />
                <Divider />
                <Segment style={{ padding: '8em 0em' }} vertical>
                content goes here
                </Segment>
            </div>
        )
    }
}