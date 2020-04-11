const express = require('express');
const router = express.Router();


router.get('/login', (req, res, next) =>{
    //if(err) throw err;
    res.send(
        {msg : 'login'}
        )
})






module.exports = router;