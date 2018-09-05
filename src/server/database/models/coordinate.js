const Sequelize = require('sequelize');

module.exports = (sqPool) => {
    const Coordinate = sqPool.define('coordinate', {
        latitude: {type: Sequelize.DOUBLE, allowNull: false},
        longitude: {type: Sequelize.DOUBLE, allowNull: false},
        ordering: {type: Sequelize.INTEGER, allowNull: false}
    });

    return Coordinate;
}