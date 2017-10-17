import Home from '../views/Home'
import React from 'react'
import { render } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<Home />', () => {
  it('renders without crashing', () => {
    render(
      <ApolloProvider client={client}>
        <Router>
          <Home />
        </Router>
      </ApolloProvider>
    )
  })
})
