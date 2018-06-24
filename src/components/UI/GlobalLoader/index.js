import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import './GlobalLoader.css'

const GlobalLoader = ({ isLoading = true }) => {
  return (
    <div className="overlay" style={{ display: isLoading ? 'flex' : 'none' }}>
      <CircularProgress size={100} thickness={3} />
    </div>
  )
}

GlobalLoader.propTypes = {
  isLoading: PropTypes.bool,
}

export default GlobalLoader
