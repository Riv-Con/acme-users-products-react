const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    }
};

const defineMethods = {
    classMethods: {
        userRecords: function() {
            return this.finadAll({
                order: [
                    ['name', 'ASC']
                ]
            })
        }
    }
};

const User = acmeDB.define('user', defineAttr, defineMethods);

module.exports = User;
