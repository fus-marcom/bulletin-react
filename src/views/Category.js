import React from 'react'
import { graphql } from 'react-apollo'
import { getPostsByCat, getAllPosts } from '../graphql/queries/posts'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import withAuth from '../components/withAuth'
import { Helmet } from 'react-helmet'

import GridRenderer from '../components/GridTypes/GridRenderer'
import Error from '../components/Error'

const Category = ({ data, viewtype }) => RenderLayout(data, viewtype)
const AllPosts = ({ data, viewtype }) => RenderLayout(data, viewtype)

const RenderLayout = (data, viewtype) => {
  const isLoading = !data.posts
  return (
    <Layout>
      {!data.error && isLoading && <Loader />}
      {data.error && <Error error={data.error.message} />}
      {!isLoading && <RenderCategories data={data} viewtype={viewtype} />}
    </Layout>
  )
}

const RenderCategories = ({ data, viewtype }) => {
  const posts = data.posts
  return (
    <div>
      <Helmet>
        <title>
          Posts By Categories | Bulletin - Franciscan University of Steubenville
        </title>
      </Helmet>
      <GridRenderer posts={posts} viewtype={viewtype} />
    </div>
  )
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(withAuth(Category))

export const allPosts = graphql(getAllPosts)(AllPosts)
