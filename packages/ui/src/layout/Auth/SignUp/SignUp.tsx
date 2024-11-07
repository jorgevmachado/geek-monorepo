import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button';
import Image from '../../../components/Image';
import Input from '../../../components/Input/Input';
import Link from '../../../components/Link';
import Text from '../../../components/Text';

import './SignUp.scss';
import validator from '../../../utils/validator';

export interface OnSubmit {
    cpf: string;
    name: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    password: string;
    passwordConfirmation: string;
}

interface AuthProps {
    logo: string;
    onSubmit?: (submit: OnSubmit) => void;
    signInLink?: string;
    signUpGoogle?: boolean;
    internalSignUp?: boolean;
    signUpFacebook?: boolean;
}


export default function SignUp({
    logo,
    onSubmit,
    signInLink,
    signUpGoogle,
    internalSignUp,
    signUpFacebook,
}: AuthProps) {

    const hasSocialAuth = signUpGoogle || signUpFacebook;
    
    const [cpf, setCpf] = useState<string>('');
    const [invalidCpf, setInvalidCpf] = useState<boolean>(false);
    const [onBlurCpf, setOnBlurCpf] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [invalidName, setInvalidName] = useState<boolean>(false);
    const [onBlurName, setOnBlurName] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [onBlurEmail, setOnBlurEmail] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
    const [onBlurPassword, setOnBlurPassword] = useState<boolean>(false);

    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [invalidPasswordConfirmation, setInvalidPasswordConfirmation] = useState<boolean>(false);
    const [onBlurPasswordConfirmation, setOnBlurPasswordConfirmation] = useState<boolean>(false);

    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [invalidDateOfBirth, setInvalidDateOfBirth] = useState<boolean>(false);
    const [onBlurDateOfBirth, setOnBlurDateOfBirth] = useState<boolean>(false);

    const [gender, setGender] = useState<string>('');
    const [invalidGender, setInvalidGender] = useState<boolean>(false);
    const [onBlurGender, setOnBlurGender] = useState<boolean>(false);
    
    
    const validateInput = (blur: boolean,  value: string, type: 'cpf' | 'password' | 'email' | 'gender' | 'date' | 'passwordConfirmation' | 'name') => {
        if (blur) {
            if (type === 'cpf') {
                const valid = validator.isValidCpf(value);
                setInvalidCpf(!valid);
            } else if (type === 'password') {
                const valid = validator.isValidPassword(value);
                setInvalidPassword(!valid);
            } else if (type === 'passwordConfirmation') {
                const valid = validator.isValidPassword(value);
                setInvalidPasswordConfirmation(!valid);
            } else if (type === 'email') {
                const valid = validator.isValidEmail(value);
                setInvalidEmail(!valid);
            } else if (type === 'gender') {
                const valid = value === 'MALE' || value === 'FEMALE';
                setInvalidGender(!valid);
            } else if (type === 'date') {
                setInvalidDateOfBirth(false);
            } else {
                setInvalidName(false);
            }
        }
    };

    useEffect(() => {
        validateInput(onBlurCpf, cpf, 'cpf');
    }, [cpf, onBlurCpf]);

    useEffect(() => {
        validateInput(onBlurName, name, 'name');
    }, [name, onBlurName]);

    useEffect(() => {
        validateInput(onBlurEmail, email, 'email');
    }, [email, onBlurEmail]);

    useEffect(() => {
        validateInput(onBlurDateOfBirth, dateOfBirth, 'date');
    }, [dateOfBirth, onBlurDateOfBirth]);

    useEffect(() => {
        validateInput(onBlurGender, gender, 'gender');
    }, [gender, onBlurGender]);

    useEffect(() => {
        validateInput(onBlurPassword, password, 'password');
    }, [password, onBlurPassword]);

    useEffect(() => {
        validateInput(onBlurPasswordConfirmation, passwordConfirmation, 'passwordConfirmation');
    }, [passwordConfirmation, onBlurPasswordConfirmation]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateInput(true, cpf, 'cpf');
        validateInput(true, name, 'name');
        validateInput(true, email, 'email');
        validateInput(true, dateOfBirth, 'date');
        validateInput(true, gender, 'gender');
        validateInput(true, password, 'password');
        validateInput(true, passwordConfirmation, 'passwordConfirmation');

        const valid =
            !invalidCpf &&
            !invalidName &&
            !invalidEmail &&
            !invalidDateOfBirth &&
            !invalidGender &&
            !invalidPassword &&
            !invalidPasswordConfirmation;
        
        if (valid) {
            onSubmit && onSubmit({ cpf, name, email, dateOfBirth, gender, password, passwordConfirmation });
        }

    };

    return (
        <div className="signup">
            <Image src={logo} alt="logo" title="logo" className="signup__logo" />
            <div className="signup__container">
                {
                    signUpGoogle && (
                        <div className="signup__container--google">
                            <Button icon="google" fluid context="primary">
                                Google
                            </Button>
                        </div>
                    )
                }
                {
                    signUpFacebook && (
                        <div className="signup__container--facebook">
                            <Button icon="facebook" fluid context="primary">
                                Facebook
                            </Button>
                        </div>
                    )
                }
                {
                    internalSignUp && (
                        <div className="signup__container--internal">
                            {
                                hasSocialAuth && (
                                    <Text className="signup__container--internal-title">Ou cadastre com seu e-mail</Text>
                                )
                            }
                            <div className="signup__container--internal-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="signup__container--internal-form__cpf">
                                        <Input
                                            type="text"
                                            value={cpf}
                                            label="CPF"
                                            onBlur={() => setOnBlurCpf(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                                            isInvalid={invalidCpf}
                                            iconContext="primary"
                                            placeholder="Digite o seu CPF"
                                            invalidMessage="O campo deve ser um CPF válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__name">
                                        <Input
                                            type="text"
                                            value={name}
                                            label="Nome"
                                            onBlur={() => setOnBlurName(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                            isInvalid={invalidName}
                                            iconContext="primary"
                                            placeholder="Digite o seu Nome"
                                            invalidMessage="O campo deve ser um Nome válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__email">
                                        <Input
                                            type="email"
                                            value={email}
                                            label="E-mail"
                                            onBlur={() => setOnBlurEmail(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                            isInvalid={invalidEmail}
                                            iconContext="primary"
                                            placeholder="Digite o seu melhor e-mail"
                                            invalidMessage="O campo deve ser um email válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__gender">
                                        <Input
                                            type="password"
                                            value={gender}
                                            label="Senha"
                                            onBlur={() => setOnBlurGender(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)}
                                            isInvalid={invalidGender}
                                            iconContext="primary"
                                            placeholder="Digite o seu genero"
                                            invalidMessage="O campo deve ser um genero válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__date-of-birth">
                                        <Input
                                            type="text"
                                            value={dateOfBirth}
                                            label="Data de nascimento"
                                            onBlur={() => setOnBlurDateOfBirth(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
                                            isInvalid={invalidDateOfBirth}
                                            iconContext="primary"
                                            placeholder="Digite a sua data de nascimento"
                                            invalidMessage="O campo deve ser uma data válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__password">
                                        <Input
                                            type="password"
                                            value={password}
                                            label="Senha"
                                            onBlur={() => setOnBlurPassword(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                            isInvalid={invalidPassword}
                                            iconContext="primary"
                                            placeholder="Digite a sua melhor senha"
                                            invalidMessage="O campo deve ser uma senha válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__password-confirmation">
                                        <Input
                                            type="password"
                                            value={passwordConfirmation}
                                            label="Confirmação de senha"
                                            onBlur={() => setOnBlurPasswordConfirmation(true)}
                                            variant="regular"
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
                                            isInvalid={invalidPasswordConfirmation}
                                            iconContext="primary"
                                            placeholder="Confirme a sua senha"
                                            invalidMessage="O campo deve ser uma senha válido"
                                        />
                                    </div>
                                    <div className="signup__container--internal-form__button">
                                        <Button type="submit" fluid context="primary">Entrar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
                {
                    signInLink && (
                        <div className="signup__container--signin">
                            <Text> ja possui uma conta ? </Text>
                            <Link href={signInLink} context="primary"> Entre aqui </Link>
                        </div>
                    )
                }

            </div>
        </div>
    );
}