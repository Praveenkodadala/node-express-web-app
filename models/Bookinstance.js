let mongoose = require('mongoose');
let Scheema = mongoose.Schema;

let BookinstanceScheema = new Scheema({
    book:{type : Scheema.ObjectId, ref: 'Book'},
    status: {type: String, required: true, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
});

BookInstanceSchema.virtual('url')
.get(function () {
  return '/catalog/bookinstance/'+this._id;
});

module.exports=mongoose.model('Bookinstance', BookinstanceScheema);