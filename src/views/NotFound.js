import React from 'react'
import Layout from '../components/Layout/index'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found- Franciscan University of Steubenville</title>
      </Helmet>
      <div>The page you are looking for does not exist.</div>
    </Layout>
  )
}

export default NotFound
