import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Checkout from './Checkout'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import loaderProvider from 'context/loaderProvider'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: green[600],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      main: red[600],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // error: red[600],
    // error: will use the default color
  },
})

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </MuiThemeProvider>
  )
}

export default loaderProvider(Root)
