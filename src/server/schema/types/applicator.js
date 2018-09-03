import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'ApplicatorType',
    fields: {
        id: {type: GraphQLID},
        totalCount: {type: GraphQLInt},
        name: {type: GraphQLString},
        adresse: {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
        website: {type: GraphQLString},
        logo: {type: GraphQLString},
    }
})