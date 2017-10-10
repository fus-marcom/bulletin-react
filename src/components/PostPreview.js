import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const styles = {
  card: {
    marginBottom: 15
  },
  media: {
    height: 500
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const PostPreview = ({ classes, title, imageURL, date, id }) => {
  const postDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card}>
      {imageURL && <CardMedia className={classes.media} image={imageURL} />}
      <CardContent>
        <Typography type='headline' component='h2'>
          {title}
        </Typography>
        <Typography type='subheading' component='h3'>
          {postDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/post/${id}`}>
          <Button dense color='primary'>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(PostPreview)
