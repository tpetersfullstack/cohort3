import React from 'react';

class CityController extends React.Component {


    constructor (props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.cityPopulationRef = React.createRef();
        this.cityLongitudeRef = React.createRef();
        this.cityLatitudeRef = React.createRef();
    }

    superRandom(low, high) {
        // imagine that low is 0 and high is 10
        const result = Math.floor(Math.random()*(high - low + 1)) + low
        return result
    }

    randomize = async () => {
        this.cityNameRef.current.value = await this.props.randomCity() // to be continued
        this.cityPopulationRef.current.value = this.superRandom(1, 100000); 
        this.cityLongitudeRef.current.value = this.superRandom(-180, 180);
        this.cityLatitudeRef.current.value = this.superRandom(-90, 90);
    }



    render () {

        return <div className="cityCard">
                    <div className="wideColumn1">
                            Name:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityNameRef}/>
                    </div>
                    <div className="wideColumn1">
                            Population:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityPopulationRef}/>
                    </div>
                    <div className="wideColumn1">
                            Longitude:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityLongitudeRef}/>
                    </div>
                    <div className="wideColumn1">
                            Latitude:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityLatitudeRef}/>
                    </div>

                    <div className="wideColumn1">
                        <button 
                            onClick={
                                () => {
                                    this.randomize() 
                                }
                            }>
                            Randomize
                        </button>
                    </div>

                    <div className="wideColumn2">
                        <button 
                            onClick={
                                () => { 
                                    this.props.addCityHandler(
                                        this.cityNameRef.current.value,
                                        Number(this.cityPopulationRef.current.value),
                                        Number(this.cityLongitudeRef.current.value),
                                        Number(this.cityLatitudeRef.current.value)
                                    );
                                }
                            }>
                            Genesize
                        </button>
                    </div>

                </div>

    }

}

export { CityController } ;