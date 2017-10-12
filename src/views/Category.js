import React from 'react'
import { graphql } from 'react-apollo'
import { getPostsByCat } from '../graphql/queries/posts'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import PostPreview from '../components/PostPreview'
import { Helmet } from 'react-helmet'
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
      {posts &&
        posts.edges.map(post => (
          <PostPreview
            key={post.node.id}
            id={post.node.id}
            date={post.node.date}
            imageURL={
              post.node.featuredImage && post.node.featuredImage.sourceUrl
            }
            title={post.node.title}
          />
        ))}
    </div>
  )
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Category)
