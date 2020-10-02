import { actionTypes } from './actions'

const initialState = [{
  id: '12626',
  title: 'Dormir',
  checked: false
}, {
  id: '13326',
  title: 'Manger',
  checked: false
}, {
  id: '626',
  title: 'EPITA',
  checked: false
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
