import 'babel-polyfill';
import 'babel-core/register';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import async from 'async';
import Sequelize from 'sequelize';
import sqConfig from '../config/mysql.js';
import db from '../mysqldb.js';
import models from '../models';

// const sqPool = new Sequelize(sqConfig.database, sqConfig.username, sqConfig.password, {dialectOptions: {multipleStatements: true}, ...sqConfig.config});
// const startMigration = () => {
//     console.log(`Starting Migration ${process.argv.includes("up") ? "up" :"down"}`);
//     if (process.argv.includes('up')) {
//         fs.readFile('src/server/database/migrations/thermacote_1.0.sql', 'utf8', (err, sql) => {
//             if (err) {
//                 sqPool.close();
//                 console.log(err);
//             }
//             else {
//                 async.eachSeries(sql.split(';'), (query, callback) => {
//                     sqPool.query(query)
//                         .then(rows => {
//                             callback(null, err);
//                         }, err => callback(err, null))
//                 }, err => {
//                     if (err) {
//                         sqPool.close();
//                         console.log(err);
//                     }
//                     else {
//                         console.log('Migration successful !');
//                         sqPool.close();
//                     }
//                 })
//             }
//         })
//     }
// };
const startMigration = () => {
    const sqPool = new Sequelize(sqConfig.database, sqConfig.username, sqConfig.password, {
        ...sqConfig.config,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }
    });

    const sqDb = db(models(sqPool));
    sqPool.sync({force: true})
        .then(() => {
            console.info('Database structure synchronised successfully');

            const sqlFiles = fs
                .readdirSync(__dirname)
                .filter(file => {
                    return (file.indexOf('.') !== 0) &&
                        (file.slice(-4) === '.sql');
                })
                .map(file => {
                    return {order: Number(file.split('_')[0]), filename: file};
                });

            const sqlFilesOrdered = _.orderBy(sqlFiles, ['order'], ['asc']);
            console.log(sqlFilesOrdered)
            async.eachSeries(sqlFilesOrdered, ({filename}, callback) => {
                fs.readFile(path.join(__dirname, filename), 'utf8', (err, sql) => {
                    if (err) callback(err, null);
                    else {
                        sqPool.query(sql)
                            .then(() => {
                                console.log(`${filename} successfully imported.`);
                                callback(null, filename)
                            }).catch(err => callback(err, null))
                    }
                })
            }, err => {
                if (err) console.error(`An error occured while importing entities in the database, the error states: ${err}`)
                else console.info('All files have been successfully imported.');
                sqPool.close()
            });
        })
        .catch(err => console.error(`An error occured while synchronising the database, ${err}`));
};

startMigration();