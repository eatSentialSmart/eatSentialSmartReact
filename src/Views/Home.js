import React, { Component } from 'react';
import {
    Segment
} from 'semantic-ui-react';
import axios from 'axios';


// const apiRecKey = "d2cd01518cc9bb800dbf181c4c01d203";
// const apiRecID = "da8cf82c";
const apiRecKey = "e8b036bdd9a6347775ea2c30690c2d94";
const apiRecID = "7cd61c30";

export default class Home extends Component {

    componentDidMount() {
        //SEARCH INPUT;
        let searchFood = 'cake';

        //INDEX DISPLAY TOTAL = 20;
        let fromIndex = 0;
        let toIndex = 20;

        //HEALTH INPUT FUNCTION (VEGATARIAN, VEGAN, OMNIVORE);
        let health = 'sugar-conscious';
        console.log(health);


        //HEALTH DEFICIENCES FUNCTION
        let diet = 'balanced';
        console.log(diet);

        let queryURLRec = `https://api.edamam.com/search?q=${searchFood}&app_id=${apiRecID}&app_key=${apiRecKey}&from=${fromIndex}&to=${toIndex}&health=${health}&${diet}&callback=food`;
        axios({
            url: queryURLRec,
            method: 'GET',
            jsonpCallback: "food",
            dataType: "jsonp",
        }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    -- Content Goes Here --
                </Segment>
            </div>
        )
    }
}