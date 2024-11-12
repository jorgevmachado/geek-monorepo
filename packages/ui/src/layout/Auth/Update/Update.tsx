import React, { useState } from 'react';
import { type User } from '@geek/business/auth';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';

import formatter from '../../../utils/formatter';

export interface OnSubmit {
    cpf?: User['cpf'];
    role?: User['role'];
    name?: User['name'];
    email?: User['email'];
    gender?: User['gender']
    whatsUp?: User['whatsUp'];
    dateOfBirth?: User['dateOfBirth'];
}

interface UpdateProps {
    user: User;
    title: string;
    onSubmit: (onSubmit: OnSubmit) => void;
    description: string;
}


export default function Update({ user, title, onSubmit, description }: UpdateProps) {

    const [cpf, setCpf] = useState<string>(user.cpf);
    const [invalidCpf, setInvalidCpf] = useState<boolean>(false);
    const [onBlurCpf, setOnBlurCpf] = useState<boolean>(false);

    const [name, setName] = useState<string>(user.name);
    const [invalidName, setInvalidName] = useState<boolean>(false);
    const [onBlurName, setOnBlurName] = useState<boolean>(false);

    const [email, setEmail] = useState<string>(user.email);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [onBlurEmail, setOnBlurEmail] = useState<boolean>(false);

    const [whatsUp, setWhatsUp] = useState<string>(user.whatsUp);
    const [invalidWhatsUp, setInvalidWhatsUp] = useState<boolean>(false);
    const [onBlurWhatsUp, setOnBlurWhatsUp] = useState<boolean>(false);

    const [gender, setGender] = useState<string>(user.gender);
    const [invalidGender, setInvalidGender] = useState<boolean>(false);
    const [onBlurGender, setOnBlurGender] = useState<boolean>(false);

    const [dateOfBirth, setDateOfBirth] = useState<string>(user.dateOfBirth.toString());
    const [invalidDateOfBirth, setInvalidDateOfBirth] = useState<boolean>(false);
    const [onBlurDateOfBirth, setOnBlurDateOfBirth] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <div className="auth-update">
            <Text tag="h1">{title}</Text>
            <Text tag="h2">{description}</Text>
            <div className="auth-update__form">
                <form onSubmit={handleSubmit}>
                    <div className="signup__container--internal-form__cpf">
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
                    <div className="signup__container--internal-form__whats-up">
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
                    <div className="signup__container--internal-form__gender">
                        <Input
                            type="text"
                            value={gender}
                            label="Gênero"
                            onBlur={() => setOnBlurGender(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)}
                            isInvalid={invalidGender}
                            iconContext="primary"
                            placeholder="Digite o seu gênero"
                            invalidMessage="O campo deve ser um gênero válido"
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
                    <div className="signup__container--internal-form__button">
                        <Button type="submit" fluid context="primary">Salvar alterações</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}