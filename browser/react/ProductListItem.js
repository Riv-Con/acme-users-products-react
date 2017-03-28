import React from 'react';

const ProductListItem = ({ product, onDelete }) => (
    <li className="list-group-item well">
        { product.name }
        <button className="btn btn-default btn-danger pull-right" aria-label="Left Align" onClick={ () => onDelete(product.id) }>
            <span className="glyphicon glyphicon-trash" aria-hidden="true" />
            Delete
        </button>
    </li>
);

export default ProductListItem;
