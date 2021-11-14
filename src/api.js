import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import First from "./First";

import "./App.css";
import Second from "./Second";
import Fun1 from "./Fun1";
import Location from "./Location";
import Locstate from "./Locstate";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function Api() {
  return (
    <ApolloProvider client={client}>
      <First />
    </ApolloProvider>
  );
}

export default Api;
