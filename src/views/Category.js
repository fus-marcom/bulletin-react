import React from 'react'
import { graphql } from 'react-apollo'
import { getCategories } from '../graphql/queries/categories'
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import CategoryView from '../components/CategoryView'
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
  const categories = data.categories
  return (
    <div>
      <Helmet>
        <title>
          Posts By Categories | Bulletin - Franciscan University of Steubenville
        </title>
      </Helmet>
      {categories.edges.map(category => (
        <CategoryView
          key={category.node.id}
          id={category.node.id}
          name={category.node.name}
          posts={category.node.posts}
        />
      ))}
    </div>
  )
}

export default graphql(getCategories)(Category)
