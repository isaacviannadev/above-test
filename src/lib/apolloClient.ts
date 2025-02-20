import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GQL_API_URL || '',
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY || '',
    },
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          listEpisodes: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
