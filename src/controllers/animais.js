module.exports = app => app.get('/api/animais', async (req, res) => {
    res.json(await app.models.animais.create(req.query))
});