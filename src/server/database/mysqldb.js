import User from './models/users';

export default (sqPool) => {
    return {
        getAllApplicators({limit = 10, page = 1}) {
            return sqPool.query(`SELECT * FROM applicator LIMIT ${limit} OFFSET ${(limit * page) - limit}`, {type: sqPool.QueryTypes.SELECT})
                .then(res => {
                    return res;
                })
                .catch(err => console.log(err))
        },
        getApplicatorById(id) {
            return sqPool.query(`SELECT * FROM applicator WHERE id = ${id} `, {type: sqPool.QueryTypes.SELECT})
                .then(rows => rows)
                .catch(err => console.log(err))
        },
        getUserById(id) {
            return User.find({where: {id}})
                .then(user => {
                    return [user.get({
                        plain: true
                    })];
                })
                .catch(err => console.log(err))
        },
        addNewUser(user) {
            return User.findOrCreate({where: {auth0_id: user.auth0_id}, defaults: user})
                .spread((user, created) => {
                    return user.get({
                        plain: true
                    });
                })
        }
    }
}