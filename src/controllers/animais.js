module.exports = app => app.get('/api/animais', async (req, res) => {
    return await app.models.animais.create(req.query);
});