import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';
import SignIn from '@geek/ui/layout/Auth/SignIn';

import { LOGO } from '@/layout/config';
import { authService } from '@/shared/core';
import { cookies } from '@geek/services';

interface OnSubmit {
 username: string;
 password: string;
}

const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') ?? '/';
    
    const onSubmit = ({ username, password }: OnSubmit ) => {
        authService.signIn({ email: username, password })
            .then((token) => {
                cookies.setGeekAccessToken(token);
                router.push(redirect);
            }).catch((error) => {
            console.log('# => error => ', error);
        });
    };

    return (
        <SignIn
            logo={LOGO}
            onSubmit={onSubmit}
            signUpLink="/auth/register"
            internalLogin={true}
            forgetPasswordLink="/auth/forgot-password"
        />
    );
};

Login.getLayout = (page) => <Blank>{page}</Blank>;

export default Login;
