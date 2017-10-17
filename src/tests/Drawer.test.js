import Drawer from '../components/Layout/drawer'
import React from 'react'
import { render } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import client from '../graphql/apolloClient'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<Drawer />', () => {
  it('renders without crashing', () => {
    const classes = {}
    render(
      <ApolloProvider client={client}>
        <Router>
          <Drawer classes={classes} />
        </Router>
      </ApolloProvider>
    )
  })
})
