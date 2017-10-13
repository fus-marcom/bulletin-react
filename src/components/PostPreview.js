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
    height: 500
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const PostPreview = ({ classes, title, imageURL, date, id, style }) => {
  const postDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card} style={style}>
      {imageURL && <CardMedia className={classes.media} image={imageURL} />}
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
