import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

const httpLink = new HttpLink({
 uri: 'http://localhost:3030/graphql',
});
const cache = new InMemoryCache();
const stateLink = withClientState({
 cache,
 defaults: {
   user: {
     email: 'test@yahoo.fr',
   },
 },
});
const link = ApolloLink.from([stateLink, httpLink]);
const client = new ApolloClient({
 link,
 cache,
});
export default client;