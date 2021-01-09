import { ApolloClient, InMemoryCache } from '@apollo/client';

import { auth } from './auth';


export const apolloClient = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
    // typeDefs: {
    //     ...auth,
    // },
});
