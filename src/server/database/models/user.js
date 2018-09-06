const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const User = sqPool.define('user', {
        auth0Id: {type: Sequelize.STRING},
        name: {type: Sequelize.STRING},
        nickname: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        emailVerified: {type: Sequelize.BOOLEAN},
        givenName: {type: Sequelize.STRING},
        updatedAt: {type: Sequelize.DATE},
        createdAt: {type: Sequelize.DATE},
    });

    return User;
}