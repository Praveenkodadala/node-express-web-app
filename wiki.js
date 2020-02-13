let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    res.send('wiki home page');

});
router.get('/about', (req, res)=>{
res.json('About wiki');
});

module.exports = router;