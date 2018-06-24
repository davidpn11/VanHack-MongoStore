import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Item = ({ item, addToCart }) => {
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
      </CardContent>
    </Card>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
}

export default Item
