import React, { Component } from 'react';
import '../App.css';


import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'


export class App extends Component {
  render() {
    return (
      <div>
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
