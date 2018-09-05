const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Content = sqPool.define('content', {
        label: {type: Sequelize.STRING, allowNull: false}
    });

    Content.associations = models => {
        Content.belongsToMany(models.taxonomy, {through: models.taxonomy_content});
    };
    return Content;
}