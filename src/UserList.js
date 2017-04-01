import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({ users }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Users:</h5>
                    <div>
                        <ul className="list-group">
                            { users.map( user =>  <UserListItem key={ user.id } user ={ user } />) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    };


export default UserList;
