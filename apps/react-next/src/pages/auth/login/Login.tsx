import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';
import SignIn from '@geek/ui/layout/Auth/SignIn';

import { authService } from '@/shared/core';
import { cookies } from '@geek/services';
import { useAlert } from '@geek/ui/hooks/alert';

interface OnSubmit {
 username: string;
 password: string;
}

const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') ?? '/';
    const { addAlert } = useAlert();
    
    const onSubmit = ({ username, password }: OnSubmit ) => {
        authService.signIn({ email: username, password })
            .then((token) => {
                cookies.setGeekAccessToken(token);
                addAlert({ type: 'error', message: 'Autenticado com sucesso!' });
                router.push(redirect);
            }).catch(() => {
                addAlert({ type: 'error', message: 'Algo deu errado, tente novamente mais tarde!' });
        });
    };

    return (
        <SignIn
            logo="/logo/logo.svg"
            onSubmit={onSubmit}
            signUpLink="/auth/register"
            internalLogin={true}
            forgetPasswordLink="/auth/forgot-password"
        />
    );
};

Login.getLayout = (page) => <Blank>{page}</Blank>;

export default Login;
