import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: props.users };
    }
    render() {
        console.log(users);
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Users:</h5>
                </div>
            </div>
        )
    }
}

export default Users;
