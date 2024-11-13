import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { NextPageWithLayout } from '@/pages/_app';

import Persist, { OnPersistSubmit } from '@geek/ui/layout/Auth/Persist';
import Blank from '@geek/ui/layout/Blank';

import { authService } from '@/shared/core';
import { cookies } from '@geek/services';
import { useAlert } from '@geek/ui/hooks/alert';

const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') ?? '/';
    const { addAlert } = useAlert();
    
    const onSubmit = ({ email, password }: OnPersistSubmit ) => {
        authService.signIn({ email, password })
            .then((token) => {
                cookies.setGeekAccessToken(token);
                addAlert({ type: 'error', message: 'Autenticado com sucesso!' });
                router.push(redirect);
            }).catch(() => {
                addAlert({ type: 'error', message: 'Algo deu errado, tente novamente mais tarde!' });
        });
    };

    return (
        <Persist
            type="signIn"
            logo="/logo/logo.svg"
            onSubmit={onSubmit}
            signUpLink={{
                title: 'Não possui uma conta ?',
                label: 'Cadastre-se aqui',
                clickAction: () => router.push('/auth/register')
            }}
            buttonLabel="Entrar"
            forgetPasswordLink={{
                label: 'Esqueci minha senha',
                clickAction: () => router.push('/auth/forgot-password')
            }}
        />
    );
};

Login.getLayout = (page) => <Blank>{page}</Blank>;

export default Login;
