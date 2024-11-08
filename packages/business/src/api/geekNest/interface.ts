import { EGender, ERole, EStatus } from '../enum';

export interface IGeekNestConfig {
    baseUrl: string;
    accessToken?: string;
}

export interface IUser {
    id: string;
    cpf: string;
    role: ERole;
    name: string;
    email: string;
    gender: EGender;
    status: EStatus;
    whatsUp: string;
    picture?: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    dateOfBirth: Date;
}

export interface ISignUpParams extends Omit<IUser, 'id' | 'role' | 'status'> {
    password: string;
    passwordConfirmation: string;
}

export interface ISignInParams extends Pick<IUser, 'email'> {
    password: string;
}