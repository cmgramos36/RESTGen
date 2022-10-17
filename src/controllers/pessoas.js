module.exports = app => app.get('/api/pessoas', async (req, res) => {    
    return await app.models.pessoas.create(req.query);    
});