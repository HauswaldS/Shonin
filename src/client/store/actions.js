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
    async getLanguages({commit}) {
        const res = await apolloClient.query({
            query: gql`{
                languages {
                    code,
                    label
                }
            }`
        });
        commit('SET_LANGUAGES', res.data.languages);
        return res.data.languages;
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
        return res.data.clients;
    },
    async getCaseStudies() {
        const res = await apolloClient.query({
            query: gql`{
                caseStudies {
                    contents {
                        label
                    }
                }
            }`
        });

        return res.data.caseStudies;
    },
    async getCertifications() {
        const res = await apolloClient.query({
            query: gql`{
                certifications {
                    name,
                    label,
                    logo
                }
            }`
        });

        return res.data.certifications;
    },
    async nuxtServerInit({dispatch}) {
        await dispatch('getLanguages');
    }

};

