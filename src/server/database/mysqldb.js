export default ({
                    sqPool,
                    user,
                    client,
                    content,
                    applicator,
                    case_study,
                    language,
                    certification
                }) => {
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
        getAllLanguages() {
            return language.findAll({raw: true})
                .then(languages => languages)
                .catch(err => console.log(err));
        },
        getAllClients() {
            return client.findAll({raw: true})
                .then(clients => clients)
                .catch(err => console.log(err));
        },
        getAllCaseStudies({limit = 100}) {
            return case_study.findAll({limit, include: [{model: content}]})
                .then(cs => cs)
                .catch(err => console.log(err));
        },
        getAllCertifications({limit = 100}) {
            return certification.findAll({limit})
                .then(c => c)
                .catch(err => console.log(err));
        },
        getUserById(id) {
            return user.find({where: {id}})
                .then(user => {
                    return [user.get({
                        plain: true
                    })];
                })
                .catch(err => console.log(err))
        },
        addNewUser(user) {
            return user.findOrCreate({where: {auth0_id: user.auth0_id}, defaults: user})
                .spread((user, created) => {
                    return user.get({
                        plain: true
                    });
                })
        }
    }
}
