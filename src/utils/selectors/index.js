import { createSelector } from 'reselect'

const items = state => state.items
const cartItems = state => state.cartItems

const getCartItems = (items = [], cartItems = []) => {
  return items.filter(item => cartItems.includes(item._id))
}

const setOnCart = (items = [], cartItems = []) => {
  return items.map(
    item => (cartItems.includes(item._id) ? { ...item, selected: true } : item)
  )
}

export const itemsSelector = createSelector(items, cartItems, setOnCart)
export const cartSelector = createSelector(items, cartItems, getCartItems)
