import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const styles = {
  card: {
    marginBottom: 15
  },
  media: {
    height: 500
  }
}

class PostPreview extends React.Component {
  constructor () {
    super()
    this.renderCard = this.renderCard.bind(this)
    this.transitionToPost = this.transitionToPost.bind(this)
  }
  render () {
    return <div>{this.renderCard()}</div>
  }

  renderCard () {
    const classes = this.props.classes
    const date = new Date(this.props.date).toLocaleDateString()
    return (
      <Card className={classes.card}>
        {this.props.imageURL &&
          <CardMedia className={classes.media} image={this.props.imageURL} />
        }
        <CardContent>
          <Typography type='headline' component='h2'>
            {this.props.title}
          </Typography>
          <Typography type='subheading' component='h3'>
            {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary' onClick={this.transitionToPost}>
            Read More
          </Button>
        </CardActions>
      </Card>
    )
  }
  transitionToPost () {
    this.props.history.push(`/post/${this.props.id}`)
  }
}

export default withStyles(styles)(withRouter(PostPreview))
