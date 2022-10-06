module.exports = (app) => app.db.connect(
    `mongodb://${app.config.dbip}:${app.config.dbport}/${app.config.dbname}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});