import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { view: props.view };
    }
    render() {
        return  (
            <nav>
                <ul className="nav nav-tabs" role="tablist">
                    <li className={ (this.state.view === 'Users') ? 'active' : '' }><a href="/api/users">Users</a></li>
                    <li className={ (this.state.view === 'Products') ? 'active' : '' }><a href="/api/products">Products</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
