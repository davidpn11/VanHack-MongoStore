import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cartSelector } from 'utils/selectors'
import { getItems } from 'utils/actions'
import Card from '@material-ui/core/Card'
export class CheckoutItems extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    cartItems: PropTypes.array,
  }

  componentDidMount = () => {
    this.props.getItems()
  }

  showCartItems() {
    const { cartItems } = this.props
    return cartItems.map(item => (
      <Card key={item._id} className="flex flex-row mt3 mh5 pa3">
        <img src={item.img_url} alt={item.title} height={100} />
        <div className="flex flex-column">
          <span className="f3 fw5">{item.title}</span>
          <span className="f4 color-text-2">{item.slogan}</span>
        </div>
      </Card>
    ))
  }

  render() {
    const { cartItems } = this.props
    return <div className="flex flex-column w-100">{this.showCartItems()}</div>
  }
}

function mapStateToProps(state) {
  return { cartItems: cartSelector(state) }
}

export default connect(mapStateToProps, { getItems })(CheckoutItems)
