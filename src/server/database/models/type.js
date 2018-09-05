const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Type = sqPool.define('type', {
        code: {type: Sequelize.STRING},
        label: {type: Sequelize.STRING, allowNull: false}
    });


    Type.associations = models => {
        Type.hasMany(models.taxonomy);
        Type.hasMany(models.content);
    };

    return Type;
}