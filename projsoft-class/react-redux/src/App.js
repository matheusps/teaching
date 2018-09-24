import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Form from './containers/Form/Form'
import './App.css'
import TodoListContainer from './containers/TodoListContainer/TodoListContainer'
import {loadTodos} from './actions'

class App extends Component{
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadTodos())
  }

  render(){
    return(
      <div className="container animated bounceInUp">
        <header className="row">ALL TODOS (DOUBLE CLICK TO REMOVE)</header>
        <TodoListContainer />
        <Form />
      </div>
    )
  }
}

export default connect()(App)