const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    }
};

const defineMethods = {

};

const Product = acmeDB.define('product', defineAttr, defineMethods);

module.exports = Product;