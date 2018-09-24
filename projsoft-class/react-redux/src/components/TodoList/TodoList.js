import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <section className="list">
    {
      todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo)} onDoubleClick={() => deleteTodo(todo.id)}/>
      )
    }
  </section>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
