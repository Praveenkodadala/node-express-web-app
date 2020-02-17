let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let AuthorSchema = new Schema({
    first_name: { type : String, required : true, max: 100},
    date_of_birth:{type : Date}

});

AuthorSchema.virtual('url').get(function() {
    return '/catalog/author/' + this._id;
  });

  module.exports = mongoose.model('Author', AuthorSchema);