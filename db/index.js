const db = require( './db' );
const User = require( './User' );
const Product = require( './Product' );

const sync = () => db.sync({ force: true });

const addUsers = () => {
    const users = ['Moe', 'Larry', 'Curly', 'Shep', 'Vince'];
    const promiseArr = users.map( name => User.create({ name }));
    return Promise.all(promiseArr);
};

const addProducts = () => {
    const products = ['Gibson ES170D', 
        'PRS 513',
        'Martin OMC-28M',
        'Yamaha CG-101A',
        'Redgate #347',
        'Korg Kronos-2',
        'Baldwin Grand'
    ];
    const promiseArr = products.map( name => Product.create({ name }));
    return Promise.all(promiseArr);
};

const seed = () => sync()
    .then(() => addUsers())
    .then(() => addProducts());

module.exports = { seed, sync, models: { User, Product } };
