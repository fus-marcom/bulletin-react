import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getPostsByCat } from '../graphql/queries/posts'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import RenderPost from '../components/renderPostPreview'
import { Helmet } from 'react-helmet'
import Grid from 'material-ui/Grid'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class Category extends Component {
  constructor () {
    super()
    this.renderCategories = this.renderCategories.bind(this)
  }
  render () {
    const posts = this.props.data.posts
    return (
      <Layout>
        {!posts && <Loader />}
        {posts && this.renderCategories(posts)}
      </Layout>
    )
  }
  renderCategories (posts) {
    return (
      <div>
        <Helmet>
          <title>
            Posts By Categories | Bulletin - Franciscan University of
            Steubenville
          </title>
        </Helmet>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <RenderPost posts={posts} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Category)
