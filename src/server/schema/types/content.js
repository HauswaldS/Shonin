import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'ContentType',
    fields: {
        id: {type: GraphQLID},
        label: {type: GraphQLString},
    }
})