import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItems, addToCart, removeFromCart } from 'utils/actions'
import Item from 'components/UI/Item'
import './ItemsList.css'
import loaderConsumer from 'context/loaderConsumer'
import { compose } from 'recompose'
import { itemsSelector } from 'utils/selectors'
export class ItemsList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    startLoading: PropTypes.func.isRequired,
    stopLoading: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  state = {}

  componentDidMount = () => {
    const { getItems, startLoading, stopLoading } = this.state
    startLoading()
    getItems().then(() => stopLoading())
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.items) {
      return nextProps
    } else {
      return null
    }
  }

  addItemToCart = id => {
    this.state.addToCart(id)
  }

  removeItemFromCart = id => {
    this.state.removeFromCart(id)
  }

  showItems() {
    const { items } = this.props
    return items.map(item => (
      <Item
        key={item._id}
        item={item}
        addToCart={this.addItemToCart}
        removeFromCart={this.removeItemFromCart}
        onCart={item.selected}
      />
    ))
  }

  render() {
    return <div className="items-grid">{this.showItems()}</div>
  }
}

function mapStateToProps(state) {
  const { items, cartItems, getItems, addToCart, removeFromCart } = state
  return { items: itemsSelector(state), getItems, addToCart, removeFromCart }
}

export default compose(
  connect(mapStateToProps, {
    getItems,
    addToCart,
    removeFromCart,
  }),
  loaderConsumer
)(ItemsList)
