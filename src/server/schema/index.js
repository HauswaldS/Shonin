import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

import ApplicatorType from './types/applicator';
import UserType from './types/user';
import ClientType from './types/client';
import LanguageType from './types/language';
import CaseStudyType from './types/case-study';
import CertificationType from './types/certifications';

import check_auth from "../utils/check_auth";


// QUERY

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
            resolve: (obj, args, {sqDb, user}) => {
                if (check_auth(user)) return sqDb.getAllApplicators(args);
                else return new Error('Not authenticated');
            }
        },
        languages: {
            type: new GraphQLList(LanguageType),
            description: 'Languages supported by Thermacote.eu',
            resolve: (obj, args, {sqDb}) => {
                return sqDb.getAllLanguages(args);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            description: 'Clients of Thermacote.eu',
            args: {
                skipNullLogo: {
                    type: GraphQLBoolean
                }
            },
            resolve: async (obj, args, {sqDb}) => {
                const clients = await sqDb.getAllClients();
                if (args.skipNullLogo) return clients.filter(c => c.logo !== null);
                else return clients;
            }
        },
        caseStudies: {
            type: new GraphQLList(CaseStudyType),
            description: 'Case studies about ThermaCote',
            args: {
                limit: {
                    type: GraphQLInt
                }
            },
            resolve: (obj, args, {sqDb}) => {
                return sqDb.getAllCaseStudies(args);
            }
        },
        certifications: {
            type: new GraphQLList(CertificationType),
            description: 'Certifications acquired by ThermaCote',
            args: {
                limit: {
                    type: GraphQLInt
                }
            },
            resolve: (obj, args, {sqDb}) => {
                return sqDb.getAllCertifications(args);
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
                if (args.id) return loaders.userById.load(args.id)
            }
        }
    }
});

// MUTATIONS

import AddUserMutation from './mutations/add-user';

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        AddUser: AddUserMutation
    }
});


export default new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

