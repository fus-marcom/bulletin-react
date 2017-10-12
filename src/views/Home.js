import React from 'react'
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import Grid from 'material-ui/Grid'
import RenderPost from '../components/renderPostPreview'
import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

const Home = ({ data }) => {
  const posts = data.posts
  return (
    <Layout>
      <Helmet>
        <title>Home | Bulletin - Franciscan University of Steubenville</title>
      </Helmet>
      {!posts && <Loader />}
      {posts && (
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <RenderPost posts={posts} />
          </Grid>
        </Grid>
      )}
    </Layout>
  )
}

export default graphql(getAllPosts)(Home)
