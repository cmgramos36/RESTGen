module.exports = app => app.db.model (
    'Obj',
    new app.db.Schema (
        {
            nome: String,
            cor: String,
            quant: Number
        }, {
            collection: "objs",
            versionKey: false
        }
    )
);