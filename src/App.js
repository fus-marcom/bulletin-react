import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './graphql/apolloClient'
import Routes from './Routes'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
