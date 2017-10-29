import Layout from '../components/Layout/index'
import React from 'react'
import { shallow } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'

describe('<Layout />', () => {
  it('renders without crashing', () => {
    shallow(
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    )
  })
})
