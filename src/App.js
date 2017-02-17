import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getInitialState() {
    return {
      clicks: 0,
      texte: ""
    };
  }
  onClick(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  onUpdate(evt) {
    this.setState({
      texte: evt.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <p>Une première application utilisant ReactJS</p>
        </div>
        <div name="clicker">
          <p>{this.state.clicks}</p>

          <p onClick={this.onClick} className="App">Cliquez moi ! </p>
        </div>
        <hr />
        <div name="texte">
          <p>Saisissez du texte : <input type="text" id="zoneTexte" className="App" onChange={this.onUpdate} /></p>
          <p>texte saisi : {this.state.texte}</p>
        </div>

      </div>
    );
  }
};

export default App;