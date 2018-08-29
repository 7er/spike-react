import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters


const initialState = {visibilityFilter: SHOW_ALL, todos: []}

function todoApp(state = initialState, action) {
    switch (action.type) {
    case ADD_TODO:
        return Object.assign(
            {},
            state,
            {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
    case TOGGLE_TODO:
        return Object.assign(
            {},
            state,
            {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })

            })
    case SET_VISIBILITY_FILTER:
        return Object.assign(
            {},
            state,
            {visbilityFilter: action.filter})
    default:
        return state
    }

}

export default todoApp
