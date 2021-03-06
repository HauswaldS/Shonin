module.exports = (sqPool) => {
    const Realisation = sqPool.define('realisation');


    Realisation.associate = models => {
        Realisation.hasMany(models.content);
        Realisation.belongsToMany(models.taxonomy, {through: models.taxonomy_realisation});
    };

    return Realisation;
}