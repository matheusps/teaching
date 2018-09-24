import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

const Todo = ({ onDoubleClick, onClick, isDone, text }) => (
  <div className="todo"
    onClick={onClick}
    onDoubleClick={onDoubleClick}
  >
    <div className="field row">
      {text}
      <button className="checker" style={{display: isDone ? 'inline': 'none'}}>
        <i className="fa fa-check"></i>
      </button>
    </div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
