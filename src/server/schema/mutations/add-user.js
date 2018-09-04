import UserType from '../types/user';
import check_auth from '../../utils/check_auth';

import {GraphQLNonNull, GraphQLString, GraphQLBoolean} from 'graphql';

export default {
    type: UserType,
    args: {
        auth0_id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        nickname: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},
        email_verified: {type: GraphQLBoolean},
        given_name: {type: GraphQLString},
        family_name: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    },
    resolve: (obj, newUser, {sqDb, user}) => {
        if (check_auth(user)) return sqDb.addNewUser(newUser)
        else return {
            error: {
                title: 'Non authenticated user'
            }
        }
    }
};

