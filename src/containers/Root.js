import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={(props) => <Details {...props} />} />
    </Switch>
  )
}

export default Root
