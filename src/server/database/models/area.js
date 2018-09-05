module.exports = (sqPool) => {
    const area = sqPool.define('area');

    area.associate = models => {
        area.hasMany(models.coordinate);
    };

    return area;
}