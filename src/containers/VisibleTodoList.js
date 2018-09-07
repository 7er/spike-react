import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

import {
  toggleTodo,
  VisibilityFilters
} from '../actions'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos
  }
}




const VisibleTodoList = connect(
  (state) => {
    return {
      todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter)
    }
  },
  (dispatch) => {
    return {
      onTodoClick: (id) => {
        dispatch(toggleTodo(id))
      }
    }
  }
)(TodoList)

export default VisibleTodoList
