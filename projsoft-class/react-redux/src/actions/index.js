import axios from 'axios'

const apiUrl = 'https://projsoft-class-api-spring.herokuapp.com/api/todo'

export const createTodo = text => {
  
  let todo = {
    text: text,
    isDone: false
  }

  return dispatch => {
    return axios.post(apiUrl, todo).then(res => {
      dispatch(loadTodos())
    })
  }
}

const localToggle = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleTodo = todo => {
  
  todo.isDone = !todo.isDone

  return dispatch => {
    return axios.put(apiUrl + '/' + todo.id, todo).then(res => {
      dispatch(localToggle(todo.id))
    })
  }
}

export const loadTodos = () => {
  return dispatch => {
    return axios.get(apiUrl).then( res => {
      dispatch(fetchTodos(res.data))
    })
  }
}

export const fetchTodos = (todos) => ({
  type: 'FETCH_TODOS',
  payload: todos
})

export const deleteTodo = id => {
  return dispatch => {
    return axios.delete(apiUrl + '/' + id).then( res => {
      dispatch(localDelete(id))
    })
  }
}

const localDelete = id => ({
  type: 'DELETE_TODO',
  id
})