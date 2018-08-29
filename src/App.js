import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import VisibleTodoList from './containers/VisibleTodoList'


export class App extends Component {
  render() {
    return (
        <VisibleTodoList />
    );
  }
}

export default App;
