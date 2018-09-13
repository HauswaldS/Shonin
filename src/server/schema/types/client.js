import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'ClientType',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        website: {type: GraphQLString},
        logo: {type: GraphQLString},
    }
})