import React, { Component } from 'react';

const Nav = ({ view, users, products }) => {
        return  (
            <nav>
                <ul className="nav nav-tabs" role="tablist">
                    <li className={ (view === 'Users') ? 'active' : '' }><a href="#">Users ({ users.length })</a></li>
                    <li className={ (view === 'Products') ? 'active' : '' }><a href="#">Products ({ products.length })</a></li>
                </ul>
            </nav>
        )
    }

export default Nav;
