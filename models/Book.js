let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title :{ type : String, required : true},

    author:{type: Schema.ObjectId, ref: 'Author', required: true},
    genre :[{type: Schema.ObjectId, ref : 'Genre'}],
    

});
BookSchema.virtual('url')
.get(function(){
    return '/catalog/book/'+this._id;
});
module.exports= mongoose.model('Book', BookSchema);