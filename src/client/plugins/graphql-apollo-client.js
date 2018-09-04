import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: `http://localhost:3000/graphql`,
    fetch
});

const authLink = setContext((_, {headers}) => {
    // get the authentication token from localstorage if it exists
    const token = localStorage.getItem('access_token');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',

        }
    }
})
// Create the apollo client
export let apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo);

export let gqClient = apolloProvider.provide();

export default (({app}, inject) => {
    app.provide = gqClient
})
