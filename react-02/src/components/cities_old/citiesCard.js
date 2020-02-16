
import React, { Component } from 'react';
import './cities.css';

class CitiesCard extends Component {
  constructor() {
    super();
    this.state = {
      updateCityInput: "",
      updatedBalance: ""
    }
  }

  handleInputChange2 = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDeposit = () => {
    this.props.account.deposit(Number(this.state.updateCityInput));
    this.setState({
      updateCityInput: "",
      updatedBalance: this.props.city.population
    })
    this.props.calculate();
  }

  handleWithdrawal = () => {
    this.props.account.withdrawal(Number(this.state.updateCityInput));
    this.setState({
      updateCityInput: "",
      updatedBalance: this.props.account.population
    })
    this.props.calculate();
  }

  render() {
    return (
          <div id ="card" className = "card">{this.props.city.name}
          <h3>City:{this.props.city.population }</h3>
            <input id="input1" 
            type="number" 
            placeholder="Please enter population" 
            name="updateAmountInput"
            value={this.state.updateCityInput}
            onChange={this.handleInputChange2}/>
            <button className="addBalance" id="idAddBalance" onClick={this.handleMovedIn}>Moved In</button>
            <button className="addBalance" id="idAddBalance" onClick={this.handleMovedOut}>Moved Out</button>
            <button className="addBalance" id="idAddBalance" onClick = { () =>this.props.deleteCity(this.props.city.name)}>Delete Account</button>
          </div> 
    );
  }
}

export default CitiesCard;

