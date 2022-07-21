import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/', // Cannot use localhost here
  cache: new InMemoryCache()
});

export default apolloClient;