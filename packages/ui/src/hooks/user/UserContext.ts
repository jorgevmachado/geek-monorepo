import React from 'react';

import { EGender, ERole, EStatus } from '@geek/business';
import { type User } from '@geek/business/auth';


export interface UserContextProps {
    user: User
    update: (user: User) => void;
}

export const initialUserData: User = {
    id: '',
    cpf: '',
    role: ERole.USER,
    name: '',
    email: '',
    gender: EGender.MALE,
    status: EStatus.INACTIVE,
    whatsUp: '',
    picture: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: undefined,
    dateOfBirth: new Date(),
};

export const UserContext = React.createContext<UserContextProps>({ user: initialUserData, update: () => { } });