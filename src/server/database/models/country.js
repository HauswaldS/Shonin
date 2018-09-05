const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Country = sqPool.define('country', {
        code: {type: Sequelize.STRING, allowNull: false},
        label: {type: Sequelize.STRING, allowNull: false}
    });

    Country.associations = models => {
        Country.hasMany(models.country_division);
    };

    return Country;
}