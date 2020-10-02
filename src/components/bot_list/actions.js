export const actionTypes = {
  TASK: 'TASK'
}

/**
 * Task
 * @return {object} action
 */
export const task = id => ({
  type: actionTypes.TASK,
  id
})
