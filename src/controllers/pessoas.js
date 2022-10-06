module.exports = app => app.get('/api/pessoas', async (req, res) => {
    res.json(await app.models.pessoas.create(req.query))
});