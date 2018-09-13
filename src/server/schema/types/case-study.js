import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

import ClientType from '../types/client';
import ApplicatorType from '../types/applicator';
import ContentType from '../types/content';

export default new GraphQLObjectType({
    name: 'CaseStudyType',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        client: {type: ClientType},
        applicator: {type: ApplicatorType},
        contents: {type: new GraphQLList(ContentType)}
    }
})