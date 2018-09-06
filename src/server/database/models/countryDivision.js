const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const CountryDivision = sqPool.define('country_division', {
        code: {type: Sequelize.STRING},
        label: {type: Sequelize.STRING}
    });

    CountryDivision.associate = models => {
        CountryDivision.belongsToMany(models.applicator, {through: models.applicator_country_division});
        CountryDivision.hasMany(models.area);
    };
    return CountryDivision;
}