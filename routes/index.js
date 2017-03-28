const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const model = db.models;

router.get('/users', (req, res, next) => {
    model.User.userRecords()
        .then( users => {
            res.send(users);
        })
        .catch(err => console.log(err));
});

router.get('/products', (req, res, next) => {
    model.Product.productRecords()
        .then( products => {
            res.send(products);
        })
        .catch(err => console.log(err));
});

module.exports = router;
