var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoBannerSchema = new Schema({
    imagem: { type: String },
    active: { type: String, default: "" }
});

module.exports = mongoose.model('ProdutoBanner', ProdutoBannerSchema);