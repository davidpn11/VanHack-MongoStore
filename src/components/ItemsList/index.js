import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItems } from 'utils/actions'
import Item from 'components/UI/Item'
import './ItemsList.css'
import loaderConsumer from 'context/loaderConsumer'
export class ItemsList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    startLoading: PropTypes.func.isRequired,
    stopLoading: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  componentDidMount = () => {
    const { getItems, startLoading, stopLoading } = this.props
    startLoading()
    getItems().then(rs => stopLoading())
  }

  showItems() {
    const { items } = this.props
    return items.map(item => (
      <span key={item._id}>
        <Item item={item} />
      </span>
    ))
  }

  render() {
    return <div className="items-grid">{this.showItems()}</div>
  }
}

export default connect(({ items, getItems }) => ({ items, getItems }), {
  getItems,
})(loaderConsumer(ItemsList))
