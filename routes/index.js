const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const model = db.models;

router.get('/users', (req, res, next) => {
    model.User.userRecords()
        .then(_users => {
            res.send(_users);
        })
});

router.get('/products', (req, res, next) => {
    res.send();
});

module.exports = router;
