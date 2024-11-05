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
            <Text className="auth__title">
                Ao continuar você aceita os Termos de uso e Política de privacidade,
                acorda em receber comunicações do GEEK, aforma ter mais de 18 anos e permite
                o compartilhamento de seus dados nas interações com a plataforma.
            </Text>
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
                            <Text className="auth__container--internal-title">Ou entre com seu e-mail</Text>
                            <div className="auth__container--internal-form">
                                <form action={internalLogin.action} method="post">
                                    <Input
                                        tip="(Tip)"
                                        type="text"
                                        value=""
                                        label="Label"
                                        variant="regular"
                                        onBlur={function noRefCheck(){}}
                                        onClick={function noRefCheck(){}}
                                        onFocus={function noRefCheck(){}}
                                        onInput={function noRefCheck(){}}
                                        iconContext="primary"
                                        onMouseDown={function noRefCheck(){}}
                                        placeholder="Placeholder"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}