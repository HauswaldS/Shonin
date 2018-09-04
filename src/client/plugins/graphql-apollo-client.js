import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: `http://localhost:3000/graphql`,
    fetch
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo);

export default (({app}, inject) => {
    app.provide = apolloProvider.provide()
})