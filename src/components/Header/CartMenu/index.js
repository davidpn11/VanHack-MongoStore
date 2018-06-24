import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

const CartMenu = ({ anchorEl, isOpen, handleClose }) => {
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
      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleClose}>My account</MenuItem>
    </Menu>
  )
}

CartMenu.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeItem: PropTypes.func,
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default CartMenu
