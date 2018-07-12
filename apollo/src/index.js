import ApolloClient, { InMemoryCache } from "apollo-boost";
import React from "react";
import { ApolloProvider as Provider } from "react-apollo";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const uri = 'http://localhost:4000';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
});

ReactDOM.render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
