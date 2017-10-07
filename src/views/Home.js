import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import Grid from 'material-ui/Grid'
import RenderPost from '../components/renderPostPreview'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class Home extends Component {
  render () {
    const posts = this.props.data.posts
    return (
      <Layout>
        {!posts && <Loader />}
        {posts && (
          <Grid container justify='center'>
            <Grid item xs={12} sm={8} md={6}>
              <RenderPost posts={posts} />
            </Grid>
          </Grid>
        )}
      </Layout>
    )
  }
}

export default graphql(getAllPosts)(Home)
