import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const GRAPHQL_API = "http://localhost:4000/";

export const client = new ApolloClient({
    uri: GRAPHQL_API,
    cache: new InMemoryCache(),
});

export const ApolloWrapper = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
