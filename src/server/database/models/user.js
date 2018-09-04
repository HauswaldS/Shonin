import Sequelize from 'sequelize';
import sqConfig from '../config/mysql.js';

const sqPool = new Sequelize(sqConfig.database, sqConfig.username, sqConfig.password, sqConfig.config);

export default sqPool.define('user', {
    auth0_id: {type: Sequelize.INTEGER},
    name: {type: Sequelize.STRING},
    nickname: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    email_verified: {type: Sequelize.BOOLEAN},
    given_name: {type: Sequelize.STRING},
    updatedAt: {type: Sequelize.DATE},
    createdAt: {type: Sequelize.DATE},
})