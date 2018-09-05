import 'babel-polyfill';
import 'babel-core/register';
import express from 'express';
// import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import getDotenv from '../server/utils/dotenv';
import check_auth from '../server/utils/check_auth';
import graphqlHTTP from 'express-graphql';
import Sequelize from 'sequelize';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const DataLoader = require('dataloader');
import schema from './schema';

getDotenv();

import sqConfig from './database/config/mysql.js';

const PROD = process.env.NODE_ENV === 'production';
const {PORT = 8080} = process.env;


const sqPool = new Sequelize(sqConfig.database, sqConfig.username, sqConfig.password, sqConfig.config);
import db from './database/mysqldb.js';
import models from './database/models';

const sqDb = db(models(sqPool));

const app = express();
const auth = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    credentialsRequired: false,
    algorithms: ['RS256']
});

// setup middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static('static'));
app.use('/static', express.static('build'));

app.use('/graphql',
    auth,
    (req, res) => {
        const loaders = {
            allApplicators: new DataLoader(sqDb.getAllApplicators),
            applicatorById: new DataLoader(sqDb.getApplicatorById),
            userById: new DataLoader(sqDb.getUserById)
        };
        graphqlHTTP({
            schema,
            graphiql: !PROD,
            context: {
                user: req.user,
                sqDb,
                loaders
            }
        })(req, res)
    });


app.listen(PORT, () => {
    console.log('Serveur listening on port: ' + PORT)
});
