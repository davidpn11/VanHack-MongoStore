import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItems, addToCart } from 'utils/actions'
import Item from 'components/UI/Item'
import './ItemsList.css'
import loaderConsumer from 'context/loaderConsumer'
import { compose } from 'recompose'
export class ItemsList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    startLoading: PropTypes.func.isRequired,
    stopLoading: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  state = {}

  componentDidMount = () => {
    const { getItems, startLoading, stopLoading } = this.state
    startLoading()
    getItems().then(rs => stopLoading())
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

  showItems() {
    const { items } = this.props
    return items.map(item => (
      <Item key={item._id} item={item} addToCart={this.addItemToCart} />
    ))
  }

  render() {
    console.log('redn')
    return <div className="items-grid">{this.showItems()}</div>
  }
}

function mapStateToProps(state) {
  const { items, getItems, addToCart } = state
  return { items, getItems, addToCart }
}

export default compose(
  connect(mapStateToProps, {
    getItems,
    addToCart,
  }),
  loaderConsumer
)(ItemsList)
