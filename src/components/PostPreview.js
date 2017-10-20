import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'

import Attachments from './Attachments'

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
  },
  continue: {
    textDecoration: 'none',
    color: blue[800],
    fontSize: '16px'
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

class PostPreview extends React.Component {
  state = {
    cRead: false,
    content: ''
  }
  sanitizeContent = content => {
    const regex = /(<([^>]+)>)/gi
    let newContent = content.replace(regex, '')
    if (!this.props.trim) return newContent
    if (newContent.split(' ').length > 55) {
      newContent = newContent
        .split(' ')
        .slice(0, 55)
        .join(' ')
      this.setState({
        cRead: true
      })
    }
    return newContent
  }
  componentWillMount () {
    this.setState({ content: this.sanitizeContent(this.props.content) })
  }
  render () {
    const { classes, title, imageURL, date, id, style, category } = this.props
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
          <Typography type="body2" gutterBottom>
            {this.state.content}
            {this.state.cRead && (
              <Link className={classes.continue} to={`/post/${id}`}>
                {' '}
                ...Continue Reading
              </Link>
            )}
          </Typography>
          {/*
        TODO:
         - Add logic to test if there are attachments
        */}
          <Attachments
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
}

export default withStyles(styles)(PostPreview)
