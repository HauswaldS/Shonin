import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} from 'graphql';


import UserType from '../types/user';

const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        auth0_user_id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        nickname: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},
        email_verified: {type: GraphQLString},
        given_name: {type: GraphQLString},
        family_name: {type: GraphQLString}
    }
});

export default {
    type: UserType,
    args: {
        input: {type: new GraphQLNonNull(UserInputType)}
    },
    resolve: (obj, {input}, {sqDb}) => {
        return sqDb.addNewUser(input)
    }
};

