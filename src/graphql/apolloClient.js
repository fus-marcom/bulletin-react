import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://jesseweigel.com/graphql'
})
const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
