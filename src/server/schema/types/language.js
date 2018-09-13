import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'LanguageType',
    fields: {
        id: {type: GraphQLID},
        code: {type: GraphQLString},
        label: {type: GraphQLString},
        logo: {type: GraphQLString}
    }
})