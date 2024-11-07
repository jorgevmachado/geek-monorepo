import React from 'react';

import { NextPageWithLayout } from '@/pages/_app';

import { Blank, SignIn } from '@geek/ui';

import { LOGO } from '@/layout/config';

interface OnSubmit {
 username: string;
 password: string;
}

const onSubmit = ({ username, password }: OnSubmit ) => {
    console.log('# => username => ', username);
    console.log('# => password => ', password);
    window.open('/', '_self', 'noopener');
};

const Login: NextPageWithLayout = () => <SignIn
    logo={LOGO}
    onSubmit={onSubmit}
    signUpLink="/auth/sign-up"
    internalLogin={true}
    forgetPasswordLink="/auth/forgot-password"
/>;

Login.getLayout = (page) => <Blank>{page}</Blank>;

export default Login;
