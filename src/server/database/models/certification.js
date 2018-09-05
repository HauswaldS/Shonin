const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Certification = sqPool.define('certification', {
        name: {type: Sequelize.STRING, allowNull: false},
        website: {type: Sequelize.STRING},
        logo: {type: Sequelize.STRING, allowNull: false},
    });

    return Certification;
}