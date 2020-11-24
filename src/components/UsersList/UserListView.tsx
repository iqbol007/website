import React from 'react';
import { IUserList } from './model';

const UserListView: React.FC<IUserList> = ({ users }) => {
    return (
        <>
            {users && users?.map(o => {
                return <div>
                    {o.first_name} {o.last_name}
                </div>
            })}
        </>
    );
}

export { UserListView };
