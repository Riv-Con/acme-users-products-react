import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Main from './Main';
import ProductList from './ProductList';
import UserList from './UserList';

const RouteContainer = () => {
    return (
        <Router history={ hashHistory } >
            <Route path="/" component={ Main } >
                <IndexRedirect to="/products" />
                <Route path="/users" component={ UserList } />
                <Route path="/products" component={ ProductList } />
            </Route>
        </Router>
    )
};

var root = document.getElementById('root');
render(<RouteContainer />, root);
