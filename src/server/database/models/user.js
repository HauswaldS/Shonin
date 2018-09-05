const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const User = sqPool.define('user', {
        auth0_id: {type: Sequelize.STRING},
        name: {type: Sequelize.STRING},
        nickname: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        email_verified: {type: Sequelize.BOOLEAN},
        given_name: {type: Sequelize.STRING},
        updatedAt: {type: Sequelize.DATE},
        createdAt: {type: Sequelize.DATE},
    });

    return User;
}