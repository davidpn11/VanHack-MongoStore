import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CartMenu from './CartMenu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { getItems, removeFromCart } from 'utils/actions'
import { connect } from 'react-redux'
import { cartSelector } from 'utils/selectors'
class Header extends Component {
  state = {
    anchorEl: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.cartItems !== prevState.cartItems) {
      return nextProps
    } else {
      return null
    }
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

  componentDidMount = () => {
    this.state.getItems()
  }

  render() {
    const { anchorEl, cartItems, removeFromCart } = this.state
    console.log('items', cartItems)
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
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { cartItems: cartSelector(state) }
}

export default connect(mapStateToProps, { getItems, removeFromCart })(Header)
