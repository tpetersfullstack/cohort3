import React from 'react';
import './Community.css';

import {Community} from './scripts/CityAndCommunity.js'
import fetchfunctions from './scripts/fetch.js'

class Card extends React.Component {
    render() {
        let city = this.props.city;
        return(
            <div city = {city}
            className = {this.props.selected === city.key ? "selectedCard" :
            this.props.index%2 === 0 ? "Card1" : "Card2"}
            onClick = {(e) => this.props.onClick(e, city.key)}>
                {this.props.selected === city.key &&
                <p className="closeX" onClick={() => this.props.delete(city.key)}>✖</p>}
                <p className = "cardHeader">{city.Name}</p>
                <p className = "coord">Latitude: {city.Latitude}</p>
                <p className = "coord">Longitude: {city.Longitude}</p>
            </div>
        )
    }
}

class CityandCommunity extends React.Component {
    constructor () {
        super ()
        this.state = {
            message: "Please wait ...",
            community: new Community(),
            counter: 1,
            selected: false,
            newCityName: "",
            newCityLat: "",
            newCityLong: "",
            newCityPop: "",
            movingNumber: "",
            search: ""
        }
        this.unselect = this.unselect.bind(this);
        this.newCityNameChange = this.newCityNameChange.bind(this);
        this.newCityLatChange = this.newCityLatChange.bind(this);
        this.newCityLongChange = this.newCityLongChange.bind(this);
        this.newCityPopChange = this.newCityPopChange.bind(this);
        this.movingNumberChange = this.movingNumberChange.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.addNew = this.addNew.bind(this);
        this.total = this.total.bind(this);
        this.north = this.north.bind(this);
        this.south = this.south.bind(this);
        this.moveIn = this.moveIn.bind(this);
        this.moveOut = this.moveOut.bind(this);
    }
    componentDidMount(){
        let newCommunity = new Community();
        let counter
        let highestKey = fetchfunctions.load(newCommunity);
        highestKey.then(result => {
            if (newCommunity.Cities.length >= 1) {
                counter = result+1;
                this.setState({
                    message : `Server data successfully loaded.\n`+
                    `There are currently ${newCommunity.Cities.length} Cities.`
                })
                this.setState({community : newCommunity, counter : counter})
            } else{
                this.setState({
                    message : `Loading major Canadian Cities to the server.\nPlease wait ...`
                })
                this.loadCanada()
            }
        }, reject => {
            this.setState({
                message : `We are sorry!! something went wrong while loading saved data.\n${reject}`
            })
        }
        );
    }
    
    async loadCanada () {
        let cityCana = await fetchfunctions.loadLocal();
        let newCommunity = this.state.community;
        for (let i=0; i < cityCana.length; i++) {
            let itm = cityCana[i];
            newCommunity.addNewCity(i+1, itm.city,
            Number(itm.lat), Number(itm.lng), Number(itm.population));
            await fetchfunctions.addNew(newCommunity.Cities.filter((itm) => itm.key === i+1)[0]);
            await this.setState({
                message : `Loading major Canadian Cities to the server.\nPlease wait ...\n${i+1} out of ${cityCana.length} Cities have benn added.`
            });
        };
        this.setState({
            message : `major Canadian Cities successfully loaded.\n`+
            `There are currently ${newCommunity.Cities.length} Cities.`,
            counter : newCommunity.Cities.length+1
        })
    }

    async delete(key) {
        if (this.state.message.includes("Please wait ...")) return
        let message = "Please wait ..."
        this.setState({message: message})
        let newCommunity = this.state.community;
        let selectedCity = newCommunity.Cities.filter(itm => itm.key === key);
        let selectedCityName = selectedCity[0].Name;
        try {
            await fetchfunctions.delete(key)
            newCommunity.removeCity(key);
            message = `${selectedCityName} has been removed.`
        }catch(error){
            message = `We are sorry!! something went wrong while saving data.\n${error}`;
        }
        this.setState({community : newCommunity, selected : null, message : message});
    }
    async addNew () {
        if (this.state.message.includes("Please wait ...")) return
        if (this.state.newCityName !== "" && this.state.newCityLat !== "" && this.state.newCityLong !== ""){
            this.setState({message: "Please wait ..."})
            let newCommunity = this.state.community;
            let message = newCommunity.addNewCity(this.state.counter, this.state.newCityName,
                Number(this.state.newCityLat), Number(this.state.newCityLong), Number(this.state.newCityPop));
            if (message.includes("added")) {
                try {
                    await fetchfunctions.addNew(newCommunity.Cities.filter((itm) => itm.key === this.state.counter)[0]);
                    this.setState({
                                newCityName: "",
                                newCityLat: "",
                                newCityLong: "",
                                newCityPop: "",
                                counter : this.state.counter+1})
                } catch(error) {
                    message = `We are sorry!! something went wrong while saving data.\n${error}`
                    newCommunity.removeCity(this.state.counter);
                }
            }
            this.setState({message: message})
        } 
    }
    total () {
        if (this.state.message.includes("Please wait ...")) return
        let newCommunity = this.state.community;
        let message = `The total population of the community is ${newCommunity.getPopulation()}`
        this.setState({message: message})
    }
    north () {
        if (this.state.message.includes("Please wait ...")) return
        let newCommunity = this.state.community;
        let MostNorthern = newCommunity.getMostNorthern();
        let message = `${MostNorthern.Name} is the most southern city with the latitude of ${MostNorthern.Latitude}.`
        this.setState({message: message})
    }
    south () {
        if (this.state.message.includes("Please wait ...")) return
        let newCommunity = this.state.community;
        let MostSouthern = newCommunity.getMostSouthern();
        let message = `${MostSouthern.Name} is the most southern city with the latitude of ${MostSouthern.Latitude}.`
        this.setState({message: message})
    }

    async moveIn () {
        if (this.state.message.includes("Please wait ...")) return
        if (this.state.movingNumber !== "") {
            let message = "Please wait ..."
            this.setState({message: message})
            let newCommunity = this.state.community;
            let key = this.state.selected;
            let selectedCity = newCommunity.Cities.filter(itm => itm.key === key)[0];
            let selectedCityName = selectedCity.Name;
            let number = Number(this.state.movingNumber)
            selectedCity.movedIn(number)
            try {
                await fetchfunctions.update(selectedCity)
                message = `${number} people has moved in to ${selectedCityName}.`
            }catch(error){
                message = `We are sorry!! something went wrong while saving data.\n${error}`
                selectedCity.movedOut(number);
            }
            this.setState({message: message, movingNumber: ""})
        }

    }

    async moveOut () {
        if (this.state.message.includes("Please wait ...")) return
        if (this.state.movingNumber !== "") {
            let message = "Please wait ..."
            this.setState({message: message})
            let newCommunity = this.state.community;
            let key = this.state.selected;
            let selectedCity = newCommunity.Cities.filter(itm => itm.key === key)[0];
            let selectedCityName = selectedCity.Name;
            let number = Number(this.state.movingNumber)
            selectedCity.movedOut(number)
            try {
                await fetchfunctions.update(selectedCity)
                message = `${number} people has moved in to ${selectedCityName}.`
            }catch(error){
                message = `We are sorry!! something went wrong while saving data.\n${error}`
                selectedCity.movedIn(number);
            }
            this.setState({message: message, movingNumber: ""})
        }

    }

    newCityNameChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({newCityName: event.target.value});
    }
    newCityLatChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({newCityLat: event.target.value});
    }
    newCityLongChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({newCityLong: event.target.value});
    }
    newCityPopChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({newCityPop: event.target.value});
    }
    movingNumberChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({movingNumber: event.target.value});
    }
    searchChange (event) {
        if (this.state.message.includes("Please wait ...")) return
        this.setState({search: event.target.value});
    }

    select(e, key) {
        if (this.state.message.includes("Please wait ...")) return
        if (e.target.className === "closeX") return;        
        this.setState({selected: key, message: ""})
    }
    unselect(e) {
        if (this.state.message.includes("Please wait ...")) return
        if (e.target.className === "CityandCommunity" ||
            e.target.id === "leftSide" ||
            e.target.id === "rightSide" ) {
                this.setState({selected: null})
            };
    }

    render () {
        let newCommunity = this.state.community;
        let cities = [];
        if (newCommunity.Cities) cities = newCommunity.Cities
        let citiesFiltered = this.state.search === "" ? cities :
            cities.filter(itm => itm.Name.toLowerCase().includes(this.state.search.toLowerCase()));
        let cards = citiesFiltered.map((itm, idx) =>{
            return(
                <Card city={itm} key={itm.key} index={idx} selected={this.state.selected}
                onClick={(e, key) => this.select(e, key)} delete ={(key => this.delete(key))} />
            )
        })
        let selectedCity = cities.filter(itm => itm.key === this.state.selected);
        let cityInfo = selectedCity.map(itm => {
            return(
                <p key={itm.key} id="cityInfo" >{itm.show()}</p>
            )
        })
        return (
            <div className="CityandCommunity" onClick={this.unselect} >
                <div id="leftSide">
                    <div id="inputsContainer">
                        <input type="text" placeholder="City Name" id="input1"
                        value={this.state.newCityName} onChange={this.newCityNameChange}></input>
                        <input type="number" placeholder="City Latitude" id="input2"
                        value={this.state.newCityLat} onChange={this.newCityLatChange}></input>
                        <input type="number" placeholder="City Longitude" id="input3"
                        value={this.state.newCityLong} onChange={this.newCityLongChange}></input>
                        <input type="number" placeholder="City Population" id="input4"
                        value={this.state.newCityPop} onChange={this.newCityPopChange}></input>
                    </div>
                        <button className="addNew" onClick ={this.addNew} >Add New City</button>
                        <div id = "cardsContainer">
                            {cities.length > 1 &&
                            <div className = "extra">
                                <button className = "extraButtons" onClick={this.total} >Total Population</button>
                                <button className = "extraButtons" onClick={this.north}>Most Northern</button>
                                <button className = "extraButtons" onClick={this.south}>Most Southern</button>
                                <input type="text" placeholder="Search by Name" id="input6"
                                value={this.state.search} onChange={this.searchChange}></input>
                            </div>}
                            {cards}
                        </div>
                    </div>
                <div id="rightSide">
                    <p id="display">{this.state.message}</p>
                    {this.state.selected &&
                    <div className = "wholeCity">
                        <div className = "cityDisplay">
                            {cityInfo}
                        </div>
                        <div className = "moving">
                            <input type="number" placeholder="Number of people" id="input5"
                            value={this.state.movingNumber} onChange={this.movingNumberChange}></input>
                            <button className="moveIn" onClick ={this.moveIn} >Moved In</button>
                            <button className="moveOut" onClick ={this.moveOut}>Moved Out</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export {CityandCommunity}