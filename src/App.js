import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: ''
    }
  }

  zero = ()=> {
    fetch('http://numbersapi.com/0/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };

  one = ()=> {
    fetch('http://numbersapi.com/1/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };

  two = ()=> {
    fetch('http://numbersapi.com/2/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };

  three = ()=> {
    fetch('http://numbersapi.com/3/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };

  four = ()=> {
    fetch('http://numbersapi.com/4/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };

  five = ()=> {
    fetch('http://numbersapi.com/5/trivia?json')
      .then(response => response.json())
      .then(data => {this.setState({answer: data.text})});
  };




  render () {
    return (
    <div className='app-content'>
      <div className='header'>
        <h1>Number API</h1>
        <p>Pick A Number Below To See An Intresting Fact About It</p>
      </div>
      <div className='buttons'>
        <button onClick={this.zero}>0</button>
        <button onClick={this.one}>1</button>
        <button onClick={this.two}>2</button>
        <button onClick={this.three}>3</button>
        <button onClick={this.four}>4</button>
        <button onClick={this.five}>5</button>
      </div>
      <p>{this.state.answer}</p>
    </div>
    )
  }
}

export default App;
