import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// Apollo bindings!
import { ApolloProvider as Provider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Here you create the HttpLink that will connect your ApolloClient instance with the GraphQL API; your GraphQL server will be running on http://localhost:4000.
const httpLink = new HttpLink({ uri: "https://graphql-pokemon.now.sh/graphql" });

// instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
