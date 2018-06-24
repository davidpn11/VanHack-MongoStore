import { ADD_TO_CART } from 'utils/constants'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    default:
      return state
  }
}
