import { ADD_TO_CART, REMOVE_FROM_CART } from 'utils/constants'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(item => item._id !== action.id)

    default:
      return state
  }
}
