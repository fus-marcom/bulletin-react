import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'

import Attachements from './Attachments'

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
  categoryColor: {
    color: '#ffb41f'
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

const PostPreview = ({
  classes,
  title,
  imageURL,
  date,
  id,
  style,
  category,
  content
}) => {
  const postDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card} style={style}>
      <CardImage mediaStyle={classes.media} imageURL={imageURL} id={id} />
      <CardContent>
        <Typography type="caption" className={classes.categoryColor}>
          {category.toUpperCase()}
        </Typography>
        <Typography
          type="headline"
          className={classes.titleColor}
          component="h2"
        >
          <Link className={classes.link} to={`/post/${id}`}>
            {title}
          </Link>
        </Typography>
        <Typography
          className={classes.dateColor}
          type="subheading"
          component="h3"
        >
          {postDate}
        </Typography>
        <Typography
          type="body2"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/*
        TODO:
         - Add logic to test if there are attachments  
        */}
        <Attachements
        // pass the attachments as props here
        />
      </CardContent>
      <Divider />
      <CardActions>
        <Button href={`/post/${id}`} dense color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(PostPreview)
