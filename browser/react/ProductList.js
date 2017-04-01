import React from 'react';

import ProductForm from './ProductForm'
import ProductListItem from './ProductListItem';

const ProductsList  = ({ products, onDelete, onSave }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div>
                        <h5 className="bodyHeading">Products:</h5>
                        <div className= "ProdForm">
                            <ProductForm onSave={ onSave } />
                        </div>
                        <div>
                            <ul className="list-group">
                                { products.map( product => <ProductListItem onDelete={ onDelete } key={ product.id } product={ product } />) }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default ProductsList;
