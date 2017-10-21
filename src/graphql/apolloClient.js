import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
  opts: {
    credentials: 'include'
  }
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

networkInterface.useAfter([
  {
    applyAfterware ({ response }, next) {
      if (response.status === 401) {
        throw new Error('Unauthorized')
      }
      next()
    }
  }
])

export default client
