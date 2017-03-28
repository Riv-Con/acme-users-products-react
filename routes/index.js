const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const models = db.models;

router.get('/users', (req, res, next) => {
    models.User.userRecords()
        .then( users => {
            res.send(users);
        })
        .catch(err => console.log(err));
});

router.get('/products', (req, res, next) => {
    models.Product.productRecords()
        .then( products => {
            res.send(products);
        })
        .catch(err => console.log(err));
});

module.exports = router;
