const db =require( './db' );
const User = require( './User' );
const Product = require( './Product' );

const sync = () => db.sync({ force: true });

const addUsers = () => {
    const promiseArr = [];
    const users = ['Moe', 'Larry', 'Curly', 'Shep', 'Vince'];
    users.forEach( name => {
        promiseArr.push(User.create({ name }));
    });
    return Promise.all(promiseArr);
};

const addProducts = () => {
    const promiseArr = [];
    const products = ['Gibson ES170D', 
        'PRS 513',
        'Martin OMC-28M',
        'Yamaha CG-101A',
        'Redgate 347',
        'Korg Kronos-2',
        'Baldwin Grand'
    ];
    products.forEach( name => {
        promiseArr.push(Product.create({ name }));
    });
    return Promise.all(promiseArr);
};

const seed = () => sync()
    .then(() => addUsers())
    .then(() => addProducts());

module.exports = { seed, sync, models: { User, Product } };
