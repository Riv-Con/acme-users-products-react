import React, { Component } from 'react';
import Nav from './Nav';
import Users from './Users';

class Main extends Component {
    render() {
        return  (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <Nav />
                <Users />
            </div>
        )
    }
}

export default Main;
