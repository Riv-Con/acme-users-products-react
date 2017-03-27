import React, { Component } from 'react';
import Nav from './Nav';
import Users from './Users';

class Main extends Component {
    constructor() {
        super();
        this.state = { view: 'Users'};
    }
    render() {
        return  (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <Nav view={this.state.view} />
                <Users  />
            </div>
        )
    }
}

export default Main;
