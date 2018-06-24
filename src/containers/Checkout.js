import React, { Component } from 'react'
import CheckoutHeader from 'components/CheckoutHeader'
import CheckoutItems from 'components/CheckoutItems'
export class Checkout extends Component {
  render() {
    return (
      <div>
        <CheckoutHeader />
        <CheckoutItems />
      </div>
    )
  }
}

export default Checkout
