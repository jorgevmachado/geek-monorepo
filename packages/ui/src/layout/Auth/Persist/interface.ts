import React from 'react';

import { User } from '@geek/business';

import type { TContext } from '../../../interfaces';

export type TPersist = 'signUp' | 'signIn' | 'update';

export interface OnPersistSubmit {
    id?: User['id'];
    cpf: User['cpf'];
    role: User['role'];
    name: User['name'];
    email: User['email'];
    gender: User['gender']
    whatsUp: User['whatsUp'];
    password: string;
    dateOfBirth: User['dateOfBirth'];
    passwordConfirmation: string;
}

export interface PersistLink {
    title?: string;
    label: string;
    context?: TContext;
    clickAction: () => void;
}

export interface PersistProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'>{
    user?: User;
    logo?: string;
    type: TPersist;
    title?: string;
    onSubmit?: (onSubmit: OnPersistSubmit) => void;
    withGoogle?: boolean;
    signUpLink?: PersistLink;
    signInLink?: PersistLink;
    description?: string;
    buttonLabel?: string;
    withFacebook?: boolean;
    forgetPasswordLink?: PersistLink;
}

export interface ActionLinkProps extends React.HTMLAttributes<HTMLDivElement> {
    link: PersistLink;
}