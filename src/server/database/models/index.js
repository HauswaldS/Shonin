const fs = require('fs');
const path = require('path');


module.exports = (sqPool) => {
    const basename = path.basename(__filename);

    let db = {};

    fs
        .readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) &&
                (file !== basename) &&
                (file.slice(-3) === '.js');
        })
        .forEach(file => {
            let model = sqPool['import'](path.join(__dirname, file));
            db[model.name] = model;
        });

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    console.log(db);
    db.sqPool = sqPool;
    return db;
}
