import React, { Component } from 'react';

class Main extends Component {
    render() {
        return  (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <nav>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="/api/users">Users</a></li>
                        <li><a href="/api/products">Products</a></li>
                    </ul>
                </nav>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <h5>Heading</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
