import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './App';
import todoApp from './reducers'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
    VisibilityFilters
} from './actions'



const configStore = () => {
    const store = createStore(todoApp)
    store.dispatch(addTodo('Learn about react'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
    return store;
}

it('renders without crashing', () => {
    const store = configStore();
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the TodoList correctly', () => {
    const store = configStore();
    const component = renderer.create(<Provider store={store}><App /></Provider>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
