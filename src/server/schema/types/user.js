import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {type: GraphQLID},
        totalCount: {type: GraphQLInt},
        auth0_id: {type: GraphQLInt},
        name: {type: GraphQLString},
        nickname: {type: GraphQLString},
        email: {type: GraphQLString},
        email_verified: {type: GraphQLString},
        given_name: {type: GraphQLString},
        family_name: {type: GraphQLString}
    }
})