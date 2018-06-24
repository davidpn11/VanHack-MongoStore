import React, { Component } from 'react'
import GlobalContext from 'context/GlobalContext'

const loaderConsumer = ChildComponent =>
  class loader extends Component {
    render() {
      return (
        <GlobalContext.Consumer>
          {globalProps => (
            <ChildComponent
              {...this.props}
              startLoading={globalProps.startLoading}
              stopLoading={globalProps.stopLoading}
            />
          )}
        </GlobalContext.Consumer>
      )
    }
  }

export default loaderConsumer
