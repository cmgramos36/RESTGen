module.exports = app => app.get('/api/objs', async (req, res) => {    
    return await app.models.objs.create(req.query);
});