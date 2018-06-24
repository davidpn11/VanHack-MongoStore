import { getItemsAPI } from 'utils/api'
import { GET_ITEMS } from '../constants'

export function getItems() {
  return dispatch =>
    getItemsAPI()
      .then(payload => dispatch({ type: GET_ITEMS, payload }))
      .catch(err => new Error(err))
}
