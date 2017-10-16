import React from 'react'
import { graphql } from 'react-apollo'
import { getPostsByCat } from '../graphql/queries/posts'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import { Helmet } from 'react-helmet'
import GridRenderer from '../components/GridTypes/GridRenderer'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

const Category = ({ data }) => {
  const isLoading = data.loading
  return (
    <Layout>
      <Helmet>
        <title>
          Posts By Categories | Bulletin - Franciscan University of Steubenville
        </title>
      </Helmet>
      {isLoading && <Loader />}
      {!isLoading && <GridRenderer posts={data.posts} />}
    </Layout>
  )
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Category)
