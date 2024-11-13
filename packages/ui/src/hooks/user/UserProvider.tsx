import React from 'react';
import { User } from '@geek/business/auth';

import { UserContext } from './UserContext';

export interface UserProviderProps {
    user: User;
    children: React.ReactNode;
}

const UserProvider = ({ user, children }: UserProviderProps) => {
    const [_user, _setUser] = React.useState<User>(user);

    React.useEffect(() => {
        _setUser(user);
    }, []);

    const update = (user: User) => {
        _setUser(user);
    };

    return (
        <UserContext.Provider value={{ user: _user, update }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;