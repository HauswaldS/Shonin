const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const PageElement = sqPool.define('page_element', {
        ordering: {type: Sequelize.STRING, allowNull: false},
    });

    return PageElement;
}