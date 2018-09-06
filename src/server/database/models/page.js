const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Page = sqPool.define('page', {
        title: {type: Sequelize.STRING, allowNull: false},
    });


    Page.associate = models => {
        Page.hasMany(models.page_element)
    };

    return Page;
}