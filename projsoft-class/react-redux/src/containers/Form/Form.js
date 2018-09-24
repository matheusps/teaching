import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../actions'

import './Form.css'

const Form = ({ dispatch }) => {
  let input
  return (
    <footer className="row">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(createTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} className="add" placeholder="+ add new todo" />
      </form>
    </footer>
  )
}

export default connect()(Form)
