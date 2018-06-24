import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const Item = ({ item, addToCart, removeFromCart, onCart }) => {
  return (
    <Card>
      <CardMedia
        style={{
          height: 0,
          paddingTop: '56.25%',
        }}
        image={item.img_url}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="subtitle" component="h3">
          {item.slogan}
        </Typography>
        <div className="flex justify-between">
          <span className="flex f4 flex-row items-center">
            <span className="dollar">$</span> {item.price}
          </span>
          {!onCart ? (
            <Button
              onClick={() => addToCart(item._id)}
              variant="fab"
              mini
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Button>
          ) : (
            <Button
              onClick={() => removeFromCart(item._id)}
              variant="fab"
              mini
              color="secondary"
              aria-label="add"
            >
              <RemoveIcon />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  onCart: PropTypes.bool,
}

export default Item
