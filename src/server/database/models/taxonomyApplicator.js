module.exports = (sqPool) => {
    const taxonomyApplicator = sqPool.define('taxonomy_applicator');
    return taxonomyApplicator;
};