import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { usersLink: 'active', productsLink: null};
        this.usersNav = this.usersNav.bind(this);
        this.productsNav = this.productsNav.bind(this);
    }
    usersNav() {
        this.setState({ usersLink: 'active', productsLink: null });
    }
    productsNav() {
        this.setState({ usersLink: null, productsLink: 'active' });
    }
    render() {
        return (
            <nav>
                <ul className="nav nav-tabs" role="tablist">
                    <li className={ this.state.usersLink } onClick={ this.usersNav }><a href="/api/users">Users</a></li>
                    <li className={ this.state.productsLink } onClick={ this.productsNav }><a href="/api/products">Products</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
