import React from 'react'
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import GridRenderer from '../components/GridTypes/GridRenderer'
import Error from '../components/Error'
import { Helmet } from 'react-helmet'
import withAuth from '../components/withAuth'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

const Home = ({ data, viewtype, searchposts }) => {
  return (
    <Layout>
      <RenderHome data={data} viewtype={viewtype} searchposts={searchposts} />
      <span />
    </Layout>
  )
}

const RenderHome = ({ data, viewtype, searchposts }) => {
  const posts = searchposts || data.posts
  return (
    <div>
      <Helmet>
        <title>Home | Bulletin - Franciscan University of Steubenville</title>
      </Helmet>
      {!data.error && !posts && <Loader />}
      {data.error && <Error error={data.error.message} />}
      {posts && <GridRenderer posts={posts} viewtype={viewtype} />}
    </div>
  )
}

export default graphql(getAllPosts)(withAuth(Home))
