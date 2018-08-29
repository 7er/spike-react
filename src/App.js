import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux'
import todoApp from './reducers'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'



class App extends Component {
  render() {
    return (
        <div className="App">
        </div>
    );
  }
}





const store = createStore(todoApp)


// Log the initial state
console.log('Initial state', store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(
    () => console.log('on state change', store.getState())
)

// Dispatch some actions
store.dispatch(
    addTodo('Learn about actions')
    //{type: 'ADD_TODO', text: 'Learn about actions'}
)
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


export default App;
