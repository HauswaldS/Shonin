const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const PageElement = sqPool.define('page_element', {
        ordering: {type: Sequelize.STRING, allowNull: false},
    });

    PageElement.associate = models => {
        PageElement.hasMany(models.content);
    }

    return PageElement;
}