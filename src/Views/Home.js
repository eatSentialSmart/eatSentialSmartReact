import React, { Component } from 'react';
import {
    Container
} from 'semantic-ui-react';
import axios from 'axios';
import HomeSearch from '../Components/home_search_form';

// const apiRecKey = "d2cd01518cc9bb800dbf181c4c01d203";
// const apiRecID = "da8cf82c";
const apiRecKey = "e8b036bdd9a6347775ea2c30690c2d94";
const apiRecID = "7cd61c30";

//GLOBAL VARIABLES FOR GEOLOCATION
let lat;
let long;
// let latitude;
// let longitude;
// let coords;
// let position;


const styles = {
    marginTop: 40
}

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchFood: '',
            fromIndex: 0,
            toIndex: 20,
            resstrictions: '',
            health: '',
            diet: ''
        }
    }

    handleChange = (terms) => {
        console.log(terms);

        // this.setState({
        //     searchFood: terms.foodie,
        //     health: terms.dietaryClass,
        //     resstrictions: terms.selectedRes.join(),
        //     diet: terms.selectedDiet.join() 
        // })

        this.searchForFood(terms);
        this.searchZomato(terms);
    }

    searchForFood(terms) {

        let queryURLRec = `https://api.edamam.com/search?q=${terms.foodie}&app_id=${apiRecID}&app_key=${apiRecKey}&from=0&to=20&health=${terms.selectedRes}&diet=${terms.selectedDiet}&callback=food`;
        axios({
            url: queryURLRec,
            method: 'GET',
            jsonpCallback: "food",
            dataType: "jsonp",
        }).then(res => {
            console.log('----------------recipe data ----------------------');
            console.log(res);
            console.log(res.data);
        });
    }

    searchZomato = (terms) => {

        this.getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }
        }
        this.showPosition = (position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(position.coords);
            console.log(long);
            console.log(position);

            // let searchFood = 'cake';
            // let health = 'sugar-conscious';
            let queryURL = `https://developers.zomato.com/api/v2.1/search?q=${terms.foodie}%20&health=${terms.dietaryClass}&lat=${lat}&lon=${long}&sort=real_distance&order=asc`;

            axios({
                method: "GET",
                headers: {
                    'X-Zomato-API-Key': 'c7395f5b6224146e27ac3b2feb756dd7'
                },
                url: queryURL,
                dataType: 'json',
                processData: true,
            }).then(res => {
                console.log('--------------------restaurant data---------------------------');
                console.log(res.data);
            });
        };
        this.getLocation();
    }


    //this.searchZomato();

    render() {
        return (
            <div>
                <Container>
                    <div style={styles}>
                        <HomeSearch onSearchTermChange={terms => this.handleChange(terms)} />
                    </div>
                    <div style={styles}>
                        {/* <Results 
                            sectionName='Article Results'
                            articles={this.state.articles} /> */}
                    </div>

                </Container>
            </div>
        )
    }
}