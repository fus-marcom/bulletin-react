import React from 'react'
import { graphql } from 'react-apollo'
import { SinglePostDetail } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'
import Typography from 'material-ui/Typography'
import { blue, grey } from 'material-ui/colors'
import { withStyles } from 'material-ui/styles'
// import '../styles/app.css'

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

const PostDetail = ({ data, classes }) => {
  const isLoading = data.loading
  return (
    <Layout>
      <Helmet>
        <title>Loading... - Franciscan University of Steubenville</title>
      </Helmet>
      {isLoading && <Loader />}
      {!isLoading && <RenderPost data={data} classes={classes} />}
    </Layout>
  )
}

const RenderPost = ({ data, classes }) => {
  const post = data.post
  const date = new Date(post.date).toLocaleDateString()
  return (
    <div>
      <Helmet>
        <title>{post.title} - Franciscan University of Steubenville</title>
      </Helmet>

      <Typography type="caption" className={classes.categoryColor}>
        {post.categories.edges[0].node.name.toUpperCase()}
      </Typography>
      <Typography type="display2" component="h2">
        {post.title}
      </Typography>
      <Typography type="subheading" component="h4">
        {date}
      </Typography>

      {post.featuredImage && (
        <img
          alt=""
          style={{ height: '600px', width: '800px' }}
          src={post.featuredImage.sourceUrl}
        />
      )}
      <Typography
        type="headline"
        component="div"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default withStyles(styles)(
  graphql(SinglePostDetail, {
    options: ({ match }) => ({ variables: { id: match.params.post_id } })
  })(PostDetail)
)
