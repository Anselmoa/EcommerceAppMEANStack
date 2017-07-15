var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubCategoriaSchema = new Schema({
    nome: { type: String }
}, { _id: false });

module.exports = mongoose.model('SubCategorias', SubCategoriaSchema);

var CategoriasSchema = new Schema({
    nome: { type: String, required: true },
    subCategorias: [SubCategoriaSchema]
}, { versionKey: false });

module.exports = mongoose.model('Categorias', CategoriasSchema);