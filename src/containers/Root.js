import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import loaderProvider from 'context/loaderProvider'
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
})

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={props => <Details {...props} />} />
      </Switch>
    </MuiThemeProvider>
  )
}

export default loaderProvider(Root)
