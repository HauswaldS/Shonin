const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Language = sqPool.define('language', {
        code: {type: Sequelize.STRING, allowNull: false},
        label: {type: Sequelize.STRING, allowNull: false},
        logo: {type: Sequelize.STRING, allowNull: false},
    });

    Language.associate = models => {
        Language.hasMany(models.content);
    };

    return Language;
}