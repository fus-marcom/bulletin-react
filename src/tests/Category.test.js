import Category from '../views/Category'
import React from 'react'
import { render } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<Category />', () => {
  it('renders without crashing', () => {
    const match = {
      params: {
        slug: 'category-1'
      }
    }
    render(
      <ApolloProvider client={client}>
        <Router>
          <Category match={match} />
        </Router>
      </ApolloProvider>
    )
  })
})
