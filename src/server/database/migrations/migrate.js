import 'babel-polyfill';
import 'babel-core/register';
import fs from 'fs';
import async from 'async';
import Sequelize from 'sequelize';
import sqConfig from '../config/mysql.js';

const sqPool = new Sequelize(sqConfig.database, sqConfig.username, sqConfig.password, {dialectOptions: {multipleStatements: true}, ...sqConfig.config});
const startMigration = () => {
    console.log(`Starting Migration ${process.argv.includes("up") ? "up" :"down"}`);
    if (process.argv.includes('up')) {
        fs.readFile('src/server/database/migrations/thermacote_1.0.sql', 'utf8', (err, sql) => {
            if (err) {
                sqPool.close();
                console.log(err);
            }
            else {
                async.eachSeries(sql.split(';'), (query, callback) => {
                    sqPool.query(query)
                        .then(rows => {
                            callback(null, err);
                        }, err => callback(err, null))
                }, err => {
                    if (err) {
                        sqPool.close();
                        console.log(err);
                    }
                    else {
                        console.log('Migration successful !');
                        sqPool.close();
                    }
                })
            }
        })
    }
};

startMigration();