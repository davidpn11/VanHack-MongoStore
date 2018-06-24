import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'
const CardMenuItem = ({ item, removeItem }) => {
  return (
    <MenuItem>
      <div className="flex flex-row justify-between w-100">
        <div>
          <img src={item.img_url} width={50} height={50} alt={item.title} />
          <span>{item.title}</span>
        </div>
        <Button color="secondary" onClick={() => removeItem(item._id)}>
          <RemoveShoppingCart />
        </Button>
      </div>
    </MenuItem>
  )
}

CardMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func,
}

export default CardMenuItem
