const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Applicator = sqPool.define('applicator', {
        name: {type: Sequelize.STRING, allowNull: false},
        adresse: {type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        website: {type: Sequelize.STRING},
        logo: {type: Sequelize.STRING},
    });

    Applicator.associate = models => {
        Applicator.belongsToMany(models.country_division, {through: models.applicator_country_division});
        Applicator.belongsToMany(models.taxonomy, {through: models.taxonomy_applicator});
        Applicator.hasMany(models.case_study);
        Applicator.hasMany(models.realisation);
        Applicator.hasMany(models.content);
        Applicator.hasMany(models.coordinate);
    };

    return Applicator;
}