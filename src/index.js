import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './reducers'


import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
    VisibilityFilters
} from './actions'

const store = createStore(
  todoApp,
  applyMiddleware(thunkMiddleware))

store.dispatch(addTodo('Learn about react'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker();
