import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const API_KEY = import.meta.env.VITE_API_KEY || '';
const GQL_API_URL = import.meta.env.VITE_GQL_API_URL || '';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GQL_API_URL,
    headers: {
      'x-api-key': API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
