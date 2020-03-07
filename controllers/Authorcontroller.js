let Author = require('../models/Author');


exports.author_create_get = function(req, res){
    res.render('author_form', { title: 'Create Author' });
};

exports.author_create_post =[ function(req, res, next){
    
  
    var author = new Author(
        {
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            date_of_birth: req.body.date_of_birth,
            date_of_death: req.body.date_of_death,
        }
    );
    

    author.save(function(err){
        if(err){
            console.log(err);
        }
        res.send("user created")
    });


}
];

