import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'http://198.199.82.97/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
