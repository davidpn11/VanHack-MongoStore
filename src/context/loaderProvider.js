import React, { Component } from 'react'
import GlobalContext from './GlobalContext'
import GlobalLoader from 'components/UI/GlobalLoader'

const loaderProvider = ChildComponent =>
  class loader extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: false,
      }
    }
    startLoading() {
      this.setState({ isLoading: true })
    }

    stopLoading() {
      this.setState({ isLoading: false })
    }

    render() {
      const { isLoading } = this.state
      const value = {
        startLoading: () => this.startLoading(),
        stopLoading: () => this.stopLoading(),
      }

      return (
        <GlobalContext.Provider value={value}>
          <GlobalLoader isLoading={isLoading} />
          <ChildComponent />
        </GlobalContext.Provider>
      )
    }
  }

export default loaderProvider
