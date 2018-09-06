const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Content = sqPool.define('content', {
        label: {type: Sequelize.TEXT, allowNull: false}
    });

    Content.associate = models => {
        Content.belongsToMany(models.taxonomy, {through: models.taxonomy_content});
    };
    return Content;
}