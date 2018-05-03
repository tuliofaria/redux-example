const redux = require('redux')

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    case 'DECREMENT':
      return state - action.value
  }
  return state
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

// actions
const increment = { type: 'INCREMENT', value: 2 }
const decrement = { type: 'DECREMENT', value: 1 }

store.dispatch(increment)
store.dispatch(decrement)
