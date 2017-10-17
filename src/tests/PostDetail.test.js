import PostDetail from '../views/PostDetail'
import React from 'react'
import { render } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<PostDetail />', () => {
  it('renders without crashing', () => {
    const match = {
      params: {
        post_id: 'safsakKL'
      }
    }
    render(
      <ApolloProvider client={client}>
        <Router>
          <PostDetail match={match} />
        </Router>
      </ApolloProvider>
    )
  })
})
