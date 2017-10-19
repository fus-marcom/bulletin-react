import React from 'react'
import { graphql } from 'react-apollo'
import { SinglePostDetail } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'
import Typography from 'material-ui/Typography'
// import '../styles/app.css'

const PostDetail = ({ data }) => {
  const isLoading = data.loading
  return (
    <Layout>
      <Helmet>
        <title>Loading... - Franciscan University of Steubenville</title>
      </Helmet>
      {isLoading && <Loader />}
      {!isLoading && <RenderPost data={data} />}
    </Layout>
  )
}

const RenderPost = ({ data }) => {
  const post = data.post
  const date = new Date(post.date).toLocaleDateString()
  return (
    <div>
      <Helmet>
        <title>{post.title} - Franciscan University of Steubenville</title>
      </Helmet>

      <Typography
        type="subheading"
        component="h4"
      >
        {date}
      </Typography>
      <Typography
        type="display2"
        component="h2"
      >
        {post.title}
      </Typography>
      <Typography
        type="subheading"
        component="h4"
      >
        {date}
      </Typography>


      <img
        alt=""
        style={{ height: '600px', width: '800px' }}
        src={post.featuredImage && post.featuredImage.sourceUrl}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />


    </div>
  )
}

export default graphql(SinglePostDetail, {
  options: ({ match }) => ({ variables: { id: match.params.post_id } })
})(PostDetail)
