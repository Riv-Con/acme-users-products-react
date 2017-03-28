import React from 'react';

const UserListItem = ({ user }) => (
    <li className="list-group-item well">{ user.name }</li>
);

export default UserListItem;
