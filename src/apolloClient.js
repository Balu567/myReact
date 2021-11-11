import {ApolloClient} from "@apollo/client"
import { ApolloCache } from "./apolloCache";

export default new ApolloClient({
    uri: process.env.REACT_BASE_URL || "http://localhost:4000/",
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only"
        },
    },
});