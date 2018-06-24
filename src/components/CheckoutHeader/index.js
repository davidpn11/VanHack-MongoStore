import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'
const CheckoutHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="title" color="inherit">
          Back to shopping
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default CheckoutHeader
