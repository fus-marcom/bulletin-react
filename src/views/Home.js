import React from 'react'
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import GridRenderer from '../components/GridTypes/GridRenderer'
import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

const Home = ({ data, viewtype }) => {
  const posts = data.posts
  return (
    <Layout>
      <Helmet>
        <title>Home | Bulletin - Franciscan University of Steubenville</title>
      </Helmet>
      {!posts && <Loader />}
      {posts && <GridRenderer posts={posts} />}
    </Layout>
  )
}

export default graphql(getAllPosts)(Home)
