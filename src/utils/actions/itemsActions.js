import { getItemsAPI } from 'utils/api'
import { GET_ITEMS, ADD_TO_CART } from '../constants'

export function getItems() {
  return dispatch => {
    getItemsAPI()
      .then(payload => {
        console.log(payload)
        return dispatch({ type: GET_ITEMS, payload })
      })
      .catch(err => new Error(err))
  }
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  }
}
