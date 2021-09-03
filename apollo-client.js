import { ApolloClient, InMemoryCache } from '@apollo/client'
import builderConfig from '@config/builder'

const client = new ApolloClient({
  uri: `https://cdn.builder.io/api/v1/graphql/${builderConfig.apiKey}/`,
  cache: new InMemoryCache(),
})

export default client
