import React, { useEffect, useState } from 'react';

import { EGender, ERole } from '@geek/business';

import { Button, Input, Radio, Text } from '../../../../components';
import { formatter, joinClass, validator } from '../../../../utils';

import type { FormProps, TInput } from './interface';

import './Form.scss';
import type { TPersist } from '../interface';

export default function Form({
    user,
    type,
    onSubmit,
    buttonLabel = 'Cadastrar',
    ...props
}: FormProps) {
    const [cpf, setCpf] = useState<string>(user?.cpf ?? '');
    const [invalidCpf, setInvalidCpf] = useState<boolean>(false);
    const [onBlurCpf, setOnBlurCpf] = useState<boolean>(false);

    const [name, setName] = useState<string>(user?.name ?? '');
    const [invalidName, setInvalidName] = useState<boolean>(false);
    const [onBlurName, setOnBlurName] = useState<boolean>(false);

    const [email, setEmail] = useState<string>(user?.email ?? '');
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [onBlurEmail, setOnBlurEmail] = useState<boolean>(false);

    const [gender, setGender] = useState<string>(user?.gender ?? '');
    const [invalidGender, setInvalidGender] = useState<boolean>(false);
    const [onBlurGender, setOnBlurGender] = useState<boolean>(false);

    const [whatsUp, setWhatsUp] = useState<string>(user?.whatsUp ?? '');
    const [invalidWhatsUp, setInvalidWhatsUp] = useState<boolean>(false);
    const [onBlurWhatsUp, setOnBlurWhatsUp] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
    const [onBlurPassword, setOnBlurPassword] = useState<boolean>(false);

    const [dateOfBirth, setDateOfBirth] = useState<string>(user?.dateOfBirth?.toString() ?? '' );
    const [invalidDateOfBirth, setInvalidDateOfBirth] = useState<boolean>(false);
    const [onBlurDateOfBirth, setOnBlurDateOfBirth] = useState<boolean>(false);

    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [invalidPasswordConfirmation, setInvalidPasswordConfirmation] = useState<boolean>(false);
    const [onBlurPasswordConfirmation, setOnBlurPasswordConfirmation] = useState<boolean>(false);
    
    const classNameList = joinClass([
        props.className,
        'form',
    ]);

    const validateInput = (blur: boolean,  value: string, type: TInput) => {
        if (blur) {
            if (type === 'cpf') {
                const valid = validator.isValidCpf(value);
                setInvalidCpf(!valid);
            } else if (type === 'email') {
                const valid = validator.isValidEmail(value);
                setInvalidEmail(!valid);
            } else if (type === 'gender') {
                const valid = value === 'MALE' || value === 'FEMALE';
                setInvalidGender(!valid);
            } else if (type === 'whatsUp') {
                const valid = validator.isValidMobile(value);
                setInvalidWhatsUp(!valid);
            }  else if (type === 'password') {
                const valid = validator.isValidPassword(value);
                setInvalidPassword(!valid);
            } else if (type === 'dateOfBirth') {
                setInvalidDateOfBirth(false);
            } else if (type === 'passwordConfirmation') {
                const valid = validator.isValidPassword(value);
                setInvalidPasswordConfirmation(!valid);
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
        validateInput(onBlurGender, gender, 'gender');
    }, [gender, onBlurGender]);

    useEffect(() => {
        validateInput(onBlurWhatsUp, whatsUp, 'whatsUp');
    }, [whatsUp, onBlurWhatsUp]);

    useEffect(() => {
        validateInput(onBlurPassword, password, 'password');
    }, [password, onBlurPassword]);

    useEffect(() => {
        validateInput(onBlurDateOfBirth, dateOfBirth, 'dateOfBirth');
    }, [dateOfBirth, onBlurDateOfBirth]);

    useEffect(() => {
        validateInput(onBlurPasswordConfirmation, passwordConfirmation, 'passwordConfirmation');
    }, [passwordConfirmation, onBlurPasswordConfirmation]);

    const validateAll = (type: TPersist ) => {
        setInvalidCpf(false);
        setInvalidName(false);
        setInvalidEmail(false);
        setInvalidGender(false);
        setInvalidWhatsUp(false);
        setInvalidPassword(false);
        setInvalidDateOfBirth(false);
        setInvalidPasswordConfirmation(false);

        validateInput(true, email, 'email');

        if (type ==='signIn' || type ==='signUp') {
            validateInput(true, password, 'password');
        }
        
        if (type === 'signUp') {
            validateInput(true, passwordConfirmation, 'passwordConfirmation');
        }
        
        if (type === 'signUp' || type === 'update') {
            validateInput(true, cpf, 'cpf');
            validateInput(true, name, 'name');
            validateInput(true, email, 'email');
            validateInput(true, gender, 'gender');
            validateInput(true, whatsUp, 'whatsUp');
            validateInput(true, dateOfBirth, 'dateOfBirth');
        }
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        validateAll(type);

        const valid =
            !invalidCpf &&
            !invalidName &&
            !invalidEmail &&
            !invalidGender &&
            !invalidPassword &&
            !invalidDateOfBirth &&
            !invalidPasswordConfirmation;

        if (valid) {
            const currentGender = gender as EGender;
            const currentDateOfBirth = new Date(dateOfBirth);
            onSubmit({
                id: user?.id ?? '',
                cpf,
                role: user?.role ?? ERole.USER,
                name,
                email,
                gender: currentGender ?? EGender.MALE,
                whatsUp,
                password,
                dateOfBirth: currentDateOfBirth,
                passwordConfirmation
            });
        }
    };
    
    return (
        <form {...props} className={classNameList} onSubmit={handleSubmit}>
            { type !== 'signIn' && (
                <>
                    <div className="form__cpf">
                        <Input
                            type="text"
                            value={formatter.maskCpf(cpf)}
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
                    <div className="form__name">
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
                    <div className="form__whats-up">
                        <Input
                            type="text"
                            value={formatter.maskPhone(whatsUp)}
                            label="WhatsUp"
                            onBlur={() => setOnBlurWhatsUp(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setWhatsUp(e.target.value)}
                            isInvalid={invalidWhatsUp}
                            iconContext="primary"
                            placeholder="Digite o seu WhatsUp"
                            invalidMessage="O campo deve ser um WhatsUp válido"
                        />
                    </div>
                    <div className="form__gender">
                        <Text variant="large">Gênero</Text>
                        <Radio
                            value="MALE"
                            context="primary"
                            modelValue={gender}
                            onItemClick={(value) => setGender(value as EGender)}>
                            Masculino
                        </Radio>
                        <Radio
                            value="FEMALE"
                            context="primary"
                            modelValue={gender}
                            onItemClick={(value) => setGender(value as EGender)}>
                            Feminino
                        </Radio>
                    </div>
                    <div className="form__date-of-birth">
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
                </>
            )}
            <div className="form__email">
                <Input
                    type="email"
                    value={email}
                    label="E-mail"
                    onBlur={() => setOnBlurEmail(true)}
                    variant="regular"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    isInvalid={invalidEmail}
                    iconContext="primary"
                    placeholder={`Digite o seu ${type === 'signUp'? 'melhor' : '' } e-mail`}
                    invalidMessage="O campo deve ser um email válido"
                />
            </div>
            { type !== 'update' && (
                <div className="form__password">
                    <Input
                        type="password"
                        value={password}
                        label="Senha"
                        onBlur={() => setOnBlurPassword(true)}
                        variant="regular"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        isInvalid={invalidPassword}
                        iconContext="primary"
                        placeholder={`Digite a sua ${type === 'signUp' ? 'melhor' : ''} senha`}
                        invalidMessage="O campo deve ser uma senha válido"
                    />
                </div>
            )}
            { type === 'signUp' && (
                <div className="form__password-confirmation">
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
            )}

            <div className="form__button">
                <Button type="submit" fluid context="primary">{buttonLabel}</Button>
            </div>
        </form>
    );
}