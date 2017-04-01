import React, { Component } from 'react';

class ProductForm extends Component {
    constructor({ onCreate }) {
        super();
        this.state = { name: '' };
        this.onNameChange = this.onNameChange.bind(this);
        this.onCreateProduct = this.onCreateProduct.bind(this)
        this.onCreate = onCreate;
    }
    onNameChange(ev) {
        this.setState({ name: ev.target.value })
    }

    onCreateProduct(ev) {
        ev.preventDefault();
        this.onCreate(this.state.name);
        this.setState({ name: '' });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" onChange={ this.onNameChange }  value={ this.state.name } />
                </div>
                <button className="btn btn-primary" onClick={ this.onCreateProduct }>Add a Product</button>
            </form>
        );
    }
}

export default ProductForm;
