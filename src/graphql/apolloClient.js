import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
