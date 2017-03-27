const express = require( 'express' );
const router = express.Router();
const db = require( '../db' );
const model = db.models;

router.get('/users', (req, res, next) => {
    res.send();
});

router.get('/products', (req, res, next) => {
    res.send();
});

module.exports = router;
