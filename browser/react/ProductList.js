import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

const ProductsList  = ({ products, onDelete }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div>
                        <ul className="list-group">
                            { products.map( product => <ProductListItem onDelete={ onDelete } key={ product.id } product={ product } />) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default ProductsList;
