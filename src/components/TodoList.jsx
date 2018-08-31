import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => {
      const strikeContent = (<strike>{todo.text}</strike>);
      const liContent = todo.completed ? strikeContent : todo.text;
      return <li key={index}>{ liContent } </li>;
    })}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
