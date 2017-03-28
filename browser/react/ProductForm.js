import React, { Component } from 'react';

class ProductForm extends Component {
    constructor({ onSave }) {
        super();
        this.state = { name: '' };
        this.onNameChange = this.onNameChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onSave = onSave;
    }
    onNameChange(ev) {
        this.setState({ name: ev.target.value })
    }

    onButtonPress() {
        this.onSave(this.state.name);
        this.setState({ name: '' });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" onChange={ this.onNameChange }  value={ this.state.name } />
                </div>
                <button className="btn btn-primary" onClick={ this.onButtonPress }>Add a Product</button>
            </form>
        );
    }
}

export default ProductForm;
