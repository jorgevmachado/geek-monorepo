import React from 'react';

import { Button, Link, Text } from '@geek/ds';

import { joinClass } from '../../../utils';

import Form from './Form';

import { ActionLinkProps, PersistProps } from './interface';

import './Persist.scss';

function ActionLink({ link, ...props }: ActionLinkProps) {
    return (
        <div {...props}>
            {link.title && (
                <Text color={`${link.context ?? 'primary'}-100`}>{link.title}</Text>
            )}
            <Link
                onClick={link.clickAction}
                context={link.context ?? 'primary'}>
                {link.label}
            </Link>
        </div>
    );
}

export default function Persist({
                                    user,
                                    logo,
                                    type,
    title,
                                    onSubmit,
                                    withGoogle,
                                    signUpLink,
                                    signInLink,
                                    description,
                                    buttonLabel = 'Cadastrar',
                                    withFacebook,
                                    forgetPasswordLink,
                                    ...props
                                }: PersistProps) {

    const hasSocialAuth = withGoogle || withFacebook;

    const isSignIn = type === 'signIn';
    const isSignUp = type === 'signUp';
    const isUpdate = type === 'update';

    const classNameList = joinClass([
        props.className,
        'persist',
        `persist__type--${type}`,
    ]);
    
    return (
        <div {...props} className={classNameList}>
            { logo && <img src={logo} alt="persist logo" title="persist logo" className="persist__logo" /> }
            { title && <Text tag="h1" weight="bold" variant="xlarge" className="persist__title">{title}</Text> }
            { description && <Text tag="h2" variant="regular" className="persist__description">{description}</Text> }
            {(hasSocialAuth && !isUpdate) && (
                    <div className="persist__social">
                        { withGoogle && (
                                <div className="persist__social--google">
                                    <Button icon="google" fluid context="primary">
                                        Google
                                    </Button>
                                </div>
                        )}
                        { withFacebook && (
                                <div className="persist__social--facebbok">
                                    <Button icon="facebook" fluid context="primary">
                                        Facebook
                                    </Button>
                                </div>
                        )}
                        {(onSubmit && isSignUp) && (
                                <Text className="persist__social--internal">Ou cadastre com seu e-mail</Text>
                        )}
                    </div>
            )}
            { onSubmit && (
                    <Form user={user} type={type} onSubmit={onSubmit} className="persist__form" buttonLabel={buttonLabel}/>
            )}
            { (forgetPasswordLink && !isUpdate) && (
                <ActionLink link={forgetPasswordLink} className="persist__forget-password"/>
            )}
            { (signUpLink && isSignIn) && (
                <ActionLink link={signUpLink} className="persist__signUp"/>
            )}

            { (signInLink && isSignUp) && (
                <ActionLink link={signInLink} className="persist__signIn"/>
            )}
        </div>
    );
}