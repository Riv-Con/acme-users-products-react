import React, { Component } from 'react';

const Nav = ({ view, users, products, onClick }) => {
        return  (
            <nav>
                <ul className="nav nav-tabs" role="tablist">
                    <li className={ (view === 'Users') ? 'active' : '' } onClick={ () => onClick('Users')}>
                        <a>Users ({ users.length })</a>
                    </li>
                    <li className={ (view === 'Products') ? 'active' : '' } onClick={ () => onClick('Products')}>
                        <a>Products ({ products.length })</a>
                    </li>
                </ul>
            </nav>
        )
    }

export default Nav;
