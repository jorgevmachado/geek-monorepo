import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button';
import Image from '../../../components/Image';
import Input from '../../../components/Input/Input';
import Link from '../../../components/Link';
import Text from '../../../components/Text';

import './SignIn.scss';
import validator from '../../../utils/validator';

export interface OnSubmit {
    username: string;
    password: string;
}

interface AuthProps {
    logo: string;
    onSubmit: ({ username, password }: OnSubmit ) => void;
    signUpLink?: string;
    loginGoogle?: boolean;
    internalLogin?: boolean;
    loginFacebook?: boolean;
    forgetPasswordLink?: string;
}

export default function SignIn({
    logo,
    onSubmit,
    signUpLink,
    loginGoogle,
    internalLogin,
    loginFacebook,
    forgetPasswordLink,
}: AuthProps) {

    const hasSocialAuth = loginGoogle || loginFacebook;
    
    const [username, setUsername] = useState<string>('');
    const [invalidUsername, setInvalidUsername] = useState<boolean>(false);
    const [onBlurUsername, setOnBlurUsername] = useState<boolean>(false);
    
    const [password, setPassword] = useState<string>('');
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
    const [onBlurPassword, setOnBlurPassword] = useState<boolean>(false);
    
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (onBlurUsername) {
            const valid = validator.isValidEmail(username);
            setInvalidUsername(!valid);
        }
    }, [username, onBlurUsername]);

    useEffect(() => {
        if (onBlurPassword) {
            const valid = validator.isValidPassword(password);
            setInvalidPassword(!valid);
        }
    }, [password, onBlurPassword]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validUsername = validator.isValidEmail(username);
        setInvalidUsername(!validUsername);
        const validPassword = validator.isValidPassword(password);
        setInvalidPassword(!validPassword);

        if (validUsername && validPassword) {
            onSubmit({ username, password });
        }
    };

    return (
        <div className="auth">
            <Image src={logo} alt="logo" title="logo" className="auth__logo" />
            <div className="auth__container">
                {
                    loginGoogle && (
                        <div className="auth__container--google">
                            <Button icon="google" fluid context="primary">
                                Google
                            </Button>
                        </div>
                    )
                }
                {
                    loginFacebook && (
                        <div className="auth__container--facebook">
                            <Button icon="facebook" fluid context="primary">
                                Facebook
                            </Button>
                        </div>
                    )
                }
                {
                    internalLogin && (
                        <div className="auth__container--internal">
                            {
                                hasSocialAuth && (
                                    <Text className="auth__container--internal-title">Ou entre com seu e-mail</Text>
                                )
                            }
                            <div className="auth__container--internal-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="auth__container--internal-form__username">
                                        <Input
                                            type="email"
                                            value={username}
                                            label="E-mail"
                                            onBlur={() => setOnBlurUsername(true)}
                                            variant="regular"
                                            onInput={handleUsername}
                                            isInvalid={invalidUsername}
                                            iconContext="primary"
                                            placeholder="Digite o seu melhor e-mail"
                                            invalidMessage="O campo deve ser um email válido"
                                        />
                                    </div>
                                    <div className="auth__container--internal-form__password">
                                        <Input
                                            type="password"
                                            value={password}
                                            label="Senha"
                                            onBlur={() => setOnBlurPassword(true)}
                                            variant="regular"
                                            onInput={handlePassword}
                                            isInvalid={invalidPassword}
                                            iconContext="primary"
                                            placeholder="Digite a sua melhor senha"
                                            invalidMessage="O campo deve ser uma senha válido"
                                        />
                                    </div>
                                    <div className="auth__container--internal-form__button">
                                        <Button type="submit" fluid context="primary">Entrar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
                {
                    forgetPasswordLink && (
                        <div className="auth__container--forget">
                            <Link context="primary">Esqueci minha senha </Link>
                        </div>
                    )
                }
                {
                    signUpLink && (
                        <div className="auth__container--signin">
                            <Text>
                                Não possui uma conta ?
                            </Text>
                            <Link href={signUpLink} context="primary"> Cadastre-se aqui </Link>
                        </div>
                    )
                }

            </div>
        </div>
    );
}