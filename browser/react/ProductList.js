import React, { Component } from 'react';

const ProductsList  = ({ products }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Products:</h5>
                    <div>
                        <ul className="list-group">
                            { products.map(product => { 
                                return <li key={ product.id }  className="list-item well">{ product.name }</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default ProductsList;
