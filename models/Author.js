let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let AuthorSchema = new Schema({
    first_name: { type : String, required : true, max: 100},
    family_name : {type : String, required : true, max : 100},
    date_of_birth:{type : Date},
    date_of_death : {type : String}

});


// AuthorSchema.virtual('name').get(function(){
//     let fullName = '',
//  if(this.first_name&&this.family_name){
//      fullName = this.family_name + this.first_name;
//  }
//  if(!this.first_name || !this.family_name ){
//      fullName = '';
//  };
//  return fullName;

// })

// // Virtual for author's lifespan
// AuthorSchema
// .virtual('lifespan')
// .get(function () {
//   return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
// });



// AuthorSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });



  module.exports = mongoose.model('Author', AuthorSchema);