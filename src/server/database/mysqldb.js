import User from './models/user';

export default (sqPool) => {
    return {
        getAllApplicators({limit = 10, page = 1}) {
            return sqPool.query(`SELECT * FROM applicator LIMIT ${limit} OFFSET ${(limit * page) - limit}`, {type: sqPool.QueryTypes.SELECT})
                .then(res => {
                    console.log(res);
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
            User.findOne({where: {id}})
                .then(user => {
                    console.log(user)
                })
                .catch(err => console.log(err))
        },
        addNewUser(user) {
            User.findOrCreate({where: {email: user.email}, defaults: user})
                .spread((user, created) => {
                console.log(user.get({
                    plain: true
                }))
                    return user.get({
                        plain: true
                    });
            })
            },
    }
}