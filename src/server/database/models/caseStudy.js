const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const CaseStudy = sqPool.define('case_study', {
        name: {type: Sequelize.STRING, allowNull: false},
        adresse: {type: Sequelize.INTEGER},
        phone: {type: Sequelize.STRING},
    });

    CaseStudy.associates = models => {
        CaseStudy.belongsToMany(models.taxonomy, {through: models.taxonomy_case_study});
    };

    return CaseStudy;
}