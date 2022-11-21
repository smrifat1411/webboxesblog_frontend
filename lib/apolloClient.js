import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache(),
// });

// export default client;

const client = new ApolloClient({
    uri: "https://webboxesblog.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;