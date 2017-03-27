import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Users from './Users';
import Products from './Products';

class Main extends Component {
    constructor() {
        super();
        this.state = { view: 'Users', products: [], users: []};
    }
    componentDidMount() {
        Promise.all([
            axios.get('/api/users'),
            axios.get('/api/products')
        ])
        .then(([users, products]) => {
            this.setState({ products, users });
        })
    }
    render() {
        let dataView;
        if (this.state.view === 'Users') {
            dataView = <Users users={ this.state.users } />;
        } else {
            dataView = <Products products={ this.state.products } />;
        }

        return (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <Nav view={this.state.view} />
                { dataView }
            </div>
        )
    }
}

export default Main;
