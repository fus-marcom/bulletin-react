import TopNav from '../components/Layout/appbar'
import React from 'react'
import { render } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'

describe('<Appbar />', () => {
  it('renders without crashing', () => {
    const classes = {}
    render(
      <ApolloProvider client={client}>
        <TopNav classes={classes} />
      </ApolloProvider>
    )
  })
})
