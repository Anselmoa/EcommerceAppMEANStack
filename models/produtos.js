var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
    nome: { type: String, required: true },
    marca: { type: String, required: true },
    categoria: { type: Schema.Types.ObjectId },
    subCategoria: { type: String },
    destaque: { type: Boolean, default: false },
    data: { type: Date, default: Date.now },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    estado: { type: Boolean },
    classificacao: { type: Number, default: 0 },
    descricao: { type: String },
    imagens: [{ type: String }],
    comentarios: [{ type: Schema.Types.ObjectId }]
});

module.exports = mongoose.model('Produto', ProdutoSchema);