import { InMemoryCache } from "@apollo/client";

import {getHealthQuoteVar} from "./getHealthQuote";

export const apacheCache = new InMemoryCache({
    typePolicies: {
        Query:{
            fields: {
                getHealthQuote:{
                    read(){
                        return getHealthQuoteVar();
                    },
                },
            },
        },
    },
})