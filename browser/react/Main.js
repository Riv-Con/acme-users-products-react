import React, { Component } from 'react';

import axios from 'axios';
import Nav from './Nav';
import UserList from './UserList';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class Main extends Component {
    constructor() {
        super();
        this.state = { view: 'Products', products: [], users: [] };

        this.onDelete = this.onDelete.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onSave(name){
        if (name){
            axios.post('/api/products', { name })
                .then(_product => _product.data)
                .then(product => {
                    let products = this.state.products;
                    products.push(product);
                    this.setState({ products })
            });
        }
    }

    onClick(view) {
        this.setState({ view: view })
    }

    onDelete(product) {
        const products = this.state.products.filter( _product => _product.id !== product.id);
        this.setState({ products });
        axios.delete(`/api/products/${product.id}`)
            .then(() => console.log(`deleted: ${product.name}`))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        Promise.all([
            axios.get('/api/users'),
            axios.get('/api/products')
        ])
        .then(([_users, _products]) => [_users.data, _products.data])
        .then(([users, products]) => this.setState({ products, users})
        )}

    render() {
        let dataView;
        if (this.state.view === 'Users') {
            dataView = <UserList users={ this.state.users } />;
        } else {
            dataView = (
                <div>
                    <h5 className="bodyHeading">Products:</h5>
                    <div className= "ProdForm">
                        <ProductForm onSave={ this.onSave } />
                    </div>
                    <div>
                        <ProductList products={ this.state.products } onDelete={ this.onDelete } />
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <Nav view={ this.state.view} users={ this.state.users} products={ this.state.products } onClick={ this.onClick } />
                { dataView }
            </div>
        )
    }
}

export default Main;
