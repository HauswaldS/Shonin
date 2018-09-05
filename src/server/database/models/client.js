const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Client = sqPool.define('client', {
        name: {type: Sequelize.STRING, allowNull: false},
        website: {type: Sequelize.STRING, allowNull: false},
        logo: {type: Sequelize.STRING, allowNull: false},
    });

    Client.associations = models => {
        Client.hasMany(models.case_study);
    };

    return Client;
}