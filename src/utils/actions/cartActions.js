import { ADD_TO_CART } from '../constants'

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  }
}
