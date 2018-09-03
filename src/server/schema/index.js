import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
} from 'graphql';

import AddUserMutation from './mutations/add-user';

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        AddUser: AddUserMutation
    }
})


import ApplicatorType from './types/applicator';
import UserType from './types/user';

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        applicator: {
            type: ApplicatorType,
            description: "A single applicator",
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (obj, args, {loaders}) => {
                if (args.id) return loaders.applicatorById.load(args.id);
            }
        },
        applicators: {
            type: new GraphQLList(ApplicatorType),
            description: "Multiple Applicators",
            args: {
                limit: {
                    type: GraphQLInt
                },
                page: {
                    type: GraphQLInt
                },
            },
            resolve: (obj, args, {sqDb}) => {
                return sqDb.getAllApplicators(args);
            }
        },
        user: {
            type: UserType,
            description: "A single User",
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (obj, args, {loaders}) => {
                if (args.id) return loaders.userById.load(args.id);
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

