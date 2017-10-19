import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'

const styles = {
  card: {
    marginBottom: 15
  },
  titleColor: {
    color: blue[800]
  },
  dateColor: {
    color: grey[500]
  },
  media: {
    height: 250
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const CardImage = ({ mediaStyle, imageURL, id }) => {
  if (!imageURL) return ''

  return (
    <Link to={`/post/${id}`}>
      <CardMedia className={mediaStyle} image={imageURL} />
    </Link>
  )
}

const PostPreview = ({ classes, title, imageURL, date, id, style }) => {
  const postDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card} style={style}>
      <CardImage mediaStyle={classes.media} imageURL={imageURL} id={id} />
      <CardContent>
        <Typography
          type="headline"
          className={classes.titleColor}
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          className={classes.dateColor}
          type="subheading"
          component="h3"
        >
          {postDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/post/${id}`}>
          <Button dense color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(PostPreview)
