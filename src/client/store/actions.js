import {apolloClient} from '../plugins/graphql-apollo-client';
import gql from 'graphql-tag';

export default {
    async createUser({commit}, newUser) {
        const res = await apolloClient.mutate({
            mutation: gql`mutation addUserMutation($auth0_id: String!, $name: String!, $email: String!) {
                AddUser(auth0_id: $auth0_id, name: $name, email: $email) {
                    auth0_id
                    name
                    email
                }
            }`,
            variables: {
                ...newUser
            },
            update: (store, data) => {

            },
            optimisticResponse: {
                __typename: 'Mutation',
                AddUser: {
                    __typename: 'User',
                    auth0_id: newUser.auth0_id,
                    name: newUser.name,
                    email: newUser.email
                }
            }
        });

        return res;
    },
    async getLanguages() {
        const res = await apolloClient.query({
            query: gql`{
                languages {
                    code,
                    label
                }
            }`
        });
        return res;
    },
    async getClients() {
        const res = await apolloClient.query({
            query: gql`{
                clients {
                    logo,
                    website
                }
            }`
        });
        return res;
    },
    async getCaseStudies() {
        const res = await apolloClient.query({
            query: gql`{
                caseStudies {
                    
                }
            }`
        })

        return res;
    }

}

