const todos = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo}
          : todo
      )
    case 'FETCH_TODOS':
      state = action.payload
      return [...state]
    
    case 'DELETE_TODO':
      return state.filter(todo => {
        return (todo.id !== action.id)
      })
    default:
      return state
  }
}

export default todos
