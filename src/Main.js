import React, { Component } from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';
import axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = { products: [], users: [] };

        this.onDelete = this.onDelete.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        Promise.all([
            axios.get('/api/users'),
            axios.get('/api/products')
        ])
        .then(([_users, _products]) => [_users.data, _products.data])
        .then(([users, products]) => this.setState({ products, users})
        )
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

    onDelete(product) {
        const products = this.state.products.filter( _product => _product.id !== product.id);
        this.setState({ products });
        axios.delete(`/api/products/${product.id}`)
            .then(() => console.log(`deleted: ${product.name}`))
            .catch(err => console.log(err));
    }

    render() {
        let userLength = this.state.users.length;
        let productLength = this.state.products.length;
        return (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <nav role="navigation">
                    <ul className="nav nav-tabs">
                        <li><NavLink to="/users">Users ({ userLength })</NavLink></li>
                        <li><NavLink to="/products">Products ({ productLength })</NavLink></li>
                    </ul>
                </nav>
                { React.cloneElement(this.props.children,
                        {
                            users: this.state.users,
                            products: this.state.products,
                            onDelete: this.onDelete,
                            onSave: this.onSave
                        }
                    )
                }
            </div>
        )
    }
}

export default Main;
