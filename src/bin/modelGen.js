module.exports = (app, schema) => app.db.model (
    schema.name,
    new app.db.Schema (
        schema.schema,
         {
            collection: schema.collection,
            versionKey: false
        }
    )
);