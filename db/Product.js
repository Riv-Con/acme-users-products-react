const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    }
};

const defineMethods = {
    classMethods: {
        productRecords: function() {
            return this.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
        },
        deleteById: function(userId) { 
            return this.destroy({
                where: {id: userId}
            })
        },
        findById: function(userId) {
            return this.findOne({
                where: {id: userId}
            })
        }
    }
};

const Product = acmeDB.define('product', defineAttr, defineMethods);

module.exports = Product;