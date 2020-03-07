let express = require('express');
let router = express.Router();

let authorController = require('../controllers/Authorcontroller');

router.get('/', authorController.author_create_get);
router.post('/', authorController.author_create_post);


module.exports = router;