module.exports = app => app.get('/api/objs', async (req, res) => {
    res.json(await app.models.objs.create(req.query))
});