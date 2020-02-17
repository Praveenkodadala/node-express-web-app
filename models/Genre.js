let  mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreScheema = new Schema({
    name: {type: String, required: true, min: 3, max: 100}
});

GenreScheema.virtual('url')
.get(function () {
  return '/catalog/genre/'+this._id;
});

module.exports = mongoose.model('Genre', GenreScheema);
