import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CartMenu from './CartMenu'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
class Header extends Component {
  state = {
    anchorEl: null,
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <AppBar position="static" className="mb3">
        <Toolbar className="flex justify-between">
          <Typography variant="title" color="inherit">
            The Mongo Store
          </Typography>
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <ShoppingCart />
            </IconButton>
            <CartMenu
              isOpen={open}
              anchorEl={anchorEl}
              handleClose={this.handleClose}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
