const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const CaseStudy = sqPool.define('case_study');

    CaseStudy.associate = models => {
        CaseStudy.belongsToMany(models.taxonomy, {through: models.taxonomy_case_study});
        CaseStudy.hasMany(models.content);
    };

    return CaseStudy;
}