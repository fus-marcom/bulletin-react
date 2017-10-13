import React from 'react'
import { graphql } from 'react-apollo'
import { getPostsByCat } from '../graphql/queries/posts'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import PostPreview from '../components/PostPreview'
import { Helmet } from 'react-helmet'
import Grid from 'material-ui/Grid'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

const Category = ({ data }) => {
  const isLoading = data.loading
  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && <RenderCategories data={data} />}
    </Layout>
  )
}
const RenderCategories = ({ data }) => {
  const posts = data.posts
  return (
    <div>
      <Helmet>
        <title>
          Posts By Categories | Bulletin - Franciscan University of Steubenville
        </title>
      </Helmet>
      <Grid container spacing={24}>
        {posts &&
          posts.edges.map(post => (
            <Grid key={post.node.id} item xs={12} sm={6} md={4} lg={3}>
              <PostPreview
                style={{ maxWidth: '500px', margin: '0 auto' }}
                key={post.node.id}
                id={post.node.id}
                date={post.node.date}
                imageURL={
                  post.node.featuredImage && post.node.featuredImage.sourceUrl
                }
                title={post.node.title}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Category)
