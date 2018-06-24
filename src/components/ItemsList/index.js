import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItems } from 'utils/actions'
import Item from 'components/UI/Item'
export class ItemsList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  }

  componentDidMount = () => {
    this.props.getItems()
  }

  showItems() {
    const { items } = this.props
    return items.map(item => (
      <li key={item._id}>
        <Item item={item} />
      </li>
    ))
  }

  render() {
    return <ul>{this.showItems()}</ul>
  }
}

export default connect(({ items, getItems }) => ({ items, getItems }), {
  getItems,
})(ItemsList)
