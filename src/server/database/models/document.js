const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Document = sqPool.define('document');

    Document.associate = models => {
        Document.hasMany(models.content);
        Document.belongsToMany(models.taxonomy, {through: models.taxonomy_document});
    };

    return Document;
}