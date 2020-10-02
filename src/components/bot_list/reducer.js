import { actionTypes } from './actions'

const initialState = [{
  id: '12626',
  name: 'Bengal',
  checked: true 
},{
  id: 'test',
  name: 'Tom',
  checked: true 
}]

/**
 * Task
 * @param {object} state
 * @param {object} action
 * @return {object} state
 */
const task = (state, action) => {
  const { id } = action

  return state.map(item => {
    if (item.id === id) {
      item.checked = !item.checked
    }

    return item
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK:
      return task(state, action)
    default:
      return state
  }
}
