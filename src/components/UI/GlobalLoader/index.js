import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './GlobalLoader.css'
const GlobalLoader = () => {
  return (
    <div className="overlay">
      <CircularProgress size={100} thickness={3} />
    </div>
  )
}

export default GlobalLoader
