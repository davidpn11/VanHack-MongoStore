import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import CardMenuItem from './CardMenuItem'
import './CartMenu.css'
const CartMenu = ({
  anchorEl,
  isOpen,
  handleClose,
  cartItems = [],
  removeFromCart,
}) => {
  const getCartItems = () => {
    const total = cartItems
      .reduce((sum, item) => sum + item.price, 0)
      .toFixed(2)
    return (
      <div className="cart-menu">
        <h3 className="tc">ShoppingCart</h3>
        <MenuList style={{ marginBottom: 0 }}>
          {cartItems.map(item => (
            <CardMenuItem
              removeItem={removeFromCart}
              item={item}
              key={item._id}
            />
          ))}
        </MenuList>
        <span className="flex flex-row items-center">
          <span className="fw7 f4 mv3 color-text-2 mr2">Total:</span>
          ${total}
        </span>
        <Button color="secondary">Checkout</Button>
      </div>
    )
  }

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      onClose={handleClose}
    >
      {cartItems.length > 0 ? (
        getCartItems()
      ) : (
        <span className="no-items tc">No items</span>
      )}
    </Menu>
  )
}

CartMenu.propTypes = {
  isOpen: PropTypes.bool,
  anchorEl: PropTypes.object,
  cartItems: PropTypes.array.isRequired,
  handleClose: PropTypes.func,
  toggleOpen: PropTypes.func,
  removeFromCart: PropTypes.func,
}

export default CartMenu
