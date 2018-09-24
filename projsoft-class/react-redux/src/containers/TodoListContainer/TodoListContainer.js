import { connect } from 'react-redux'
import { toggleTodo, loadTodos, deleteTodo } from '../../actions'
import TodoList from '../../components/TodoList/TodoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  loadTodos: () => dispatch(loadTodos()),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
