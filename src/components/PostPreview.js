import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'
import AttachmentIcon from 'material-ui-icons/Attachment'
import IconButton from 'material-ui/IconButton'

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
    height: 'auto',
    width: '100%'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  continue: {
    textDecoration: 'none',
    color: blue[800],
    fontSize: '16px'
  },
  printVAtt: {
    width: 'auto',
    fontSize: '18px'
  }
}

const CardImage = ({ mediaStyle, imageURL, slug }) => {
  if (!imageURL) return ''

  return (
    <Link to={`/post/${slug}`}>
      <CardMedia className={mediaStyle} component="img" image={imageURL} />
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
    this.setState({ sanitized: this.sanitizeContent(this.props.content) })
  }
  render () {
    const {
      classes,
      title,
      imageURL,
      date,
      slug,
      style,
      category,
      view
    } = this.props
    const postDate = new Date(date).toLocaleDateString()
    return (
      <div>
        {view === 'card' ? (
          <CardView
            classes={classes}
            title={title}
            imageURL={imageURL}
            postDate={postDate}
            slug={slug}
            style={style}
            category={category}
            cRead={this.state.cRead}
            content={this.state.sanitized}
          />
        ) : (
          <PlainView
            classes={classes}
            title={title}
            content={this.props.content}
          />
        )}
      </div>
    )
  }
}

const CardView = ({
  classes,
  title,
  imageURL,
  postDate,
  slug,
  style,
  category,
  content,
  cRead
}) => (
  <div>
    <Card className={classes.card} style={style}>
      <CardImage mediaStyle={classes.media} imageURL={imageURL} slug={slug} />
      <CardContent>
        <Typography type="caption" className={classes.categoryColor}>
          {category.toUpperCase()}
        </Typography>
        <Typography
          type="headline"
          className={classes.titleColor}
          component="h2"
        >
          <Link className={classes.link} to={`/post/${slug}`}>
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
          {content}
          {cRead && (
            <Link className={classes.continue} to={`/post/${slug}`}>
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
        <Button href={`/post/${slug}`} dense color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  </div>
)

const PlainView = ({ classes, title, slug, content }) => (
  <div style={{ fontFamily: 'serif !important' }}>
    <h1>
      <u>{title}</u>
    </h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    {/* Attachments login */}
    <h4>Attachments</h4>
    <hr />
    <IconButton className={classes.printVAtt}>
      <AttachmentIcon /> AttachmentIcon
    </IconButton>
  </div>
)

export default withStyles(styles)(PostPreview)
