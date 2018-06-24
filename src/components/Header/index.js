import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

const Header = () => {
  return (
    <AppBar position="static" className="mb3">
      <Toolbar className="flex justify-betweenx">
        <Typography variant="title" color="inherit">
          Title
        </Typography>
        <IconButton
          //   aria-owns={open ? 'menu-appbar' : null}
          //   aria-haspopup="true"
          //   onClick={this.handleMenu}
          color="inherit"
        >
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
