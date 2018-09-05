module.exports = (sqPool) => {
    const taxonomyDocument = sqPool.define('taxonomy_document');
    return taxonomyDocument ;
};