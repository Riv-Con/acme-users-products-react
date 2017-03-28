import React from 'react';

const UserList = ({ users }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Users:</h5>
                    <div>
                        <ul className="list-group">
                            { users.map(user =>  <li key={ user.id }  className="list-item well">{ user.name }</li>) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    };


export default UserList;
