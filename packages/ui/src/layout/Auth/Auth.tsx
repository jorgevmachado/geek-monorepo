import React from 'react';

import Button from '../../components/Button';
import Image from '../../components/Image';
import Input from '../../components/Input/Input';
import Text from '../../components/Text';

import './Auth.scss';

interface AuthProps {
    logo: string;
    loginGoogle?: boolean;
    loginFacebook?: boolean;
    internalLogin?: {
        action: string;
    }
}

export default function Auth({
                                 logo,
                                 loginGoogle,
                                 loginFacebook,
                                 internalLogin
}: AuthProps) {
    return (
        <div className="auth">
            <Image src={logo} alt="logo" title="logo" className="auth__logo" />
            <div className="auth__container">
                {
                    loginGoogle && (
                        <div className="auth__container--google">
                            <Button>
                                Google
                            </Button>
                        </div>
                    )
                }
                {
                    loginFacebook && (
                        <div className="auth__container--facebook">
                            <Button>
                                Facebook
                            </Button>
                        </div>
                    )
                }
                {
                    internalLogin && (
                        <div className="auth__container--internal">
                            {
                                loginGoogle || loginFacebook && (
                                    <Text className="auth__container--internal-title">Ou entre com seu e-mail</Text>
                                )
                            }
                            <div className="auth__container--internal-form">
                                <form action={internalLogin.action} method="post">
                                    <div className="auth__container--internal-form__login">
                                        <Input
                                            type="text"
                                            value=""
                                            label="E-mail"
                                            variant="regular"
                                            onBlur={function noRefCheck(){}}
                                            onClick={function noRefCheck(){}}
                                            onFocus={function noRefCheck(){}}
                                            onInput={function noRefCheck(){}}
                                            iconContext="primary"
                                            onMouseDown={function noRefCheck(){}}
                                            placeholder="Digite o seu melhor e-mail"
                                        />
                                    </div>
                                    <div className="auth__container--internal-form__password">
                                        <Input
                                            type="text"
                                            value=""
                                            label="Senha"
                                            variant="regular"
                                            onBlur={function noRefCheck() {}}
                                            onClick={function noRefCheck() {}}
                                            onFocus={function noRefCheck() {}}
                                            onInput={function noRefCheck() {}}
                                            iconContext="primary"
                                            onMouseDown={function noRefCheck() {}}
                                            placeholder="Digite a sua melhor senha"
                                        />
                                    </div>
                                    <div className="auth__container--internal-form__actions">
                                        <Button fluid context="primary">Entrar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}