module.exports = app => app.get('/api/obj', async (req, res) => {
    res.json(await app.models.obj.create(req.query))
});