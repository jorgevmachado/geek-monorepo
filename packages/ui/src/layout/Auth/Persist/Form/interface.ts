import React from 'react';

import { User } from '@geek/business';

import type { OnPersistSubmit, TPersist } from '../interface';

export type TInput = 'cpf' | 'name' | 'gender' | 'email' | 'whatsUp' | 'password' | 'dateOfBirth' | 'passwordConfirmation';

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>{
    user?: User;
    type: TPersist;
    onSubmit: (onPersistSubmit: OnPersistSubmit) => void;
    buttonLabel?: string;
}