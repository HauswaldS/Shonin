const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Taxonomy = sqPool.define('taxonomy', {
        code: {type: Sequelize.STRING},
        label: {type: Sequelize.STRING, allowNull: false}
    });


    Taxonomy.associate = models => {
        Taxonomy.belongsToMany(models.case_study, {through: models.taxonomy_case_study});
        Taxonomy.belongsToMany(models.applicator, {through: models.taxonomy_applicator});
        Taxonomy.belongsToMany(models.content, {through: models.taxonomy_content});
        Taxonomy.belongsToMany(models.document, {through: models.taxonomy_document});
        Taxonomy.belongsToMany(models.realisation, {through: models.taxonomy_realisation});
    };

    return Taxonomy;
}