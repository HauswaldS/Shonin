import UserType from '../types/user';
import {GraphQLNonNull, GraphQLString, GraphQLInt}from 'graphql';

export default {
    type: UserType,
    args: {
        auth0_id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        nickname: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},
        email_verified: {type: GraphQLString},
        given_name: {type: GraphQLString},
        family_name: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve: (obj, newUser, {sqDb}) => {
        console.log(newUser)
        return sqDb.addNewUser(newUser)
    }
};

