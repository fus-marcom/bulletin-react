import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'https://test1.jesseweigel.com/demo/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
