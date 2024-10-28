import React from 'react';

import Button, { OAppearance as OAppearanceButton } from '../../components/Button';
import Link, { OAppearance as OAppearanceLink } from '../../components/Link';

import { GActionProps } from './interface';

import './GAction.scss';

export default function GAction({
                                    icon,
                                    type = 'button',
                                    size = 'regular',
                                    fluid,
                                    focus = true,
                                    weight = 'regular',
                                    rounded,
                                    onClick,
                                    context = 'neutral',
                                    selected,
                                    children,
                                    disabled,
                                    iconColor,
                                    appearance,
                                    underlined,
                                    iconPosition = 'left',
                                    iconClassName,
                                    notificationCounter,
                                    ...props
                                }: GActionProps) {

    const isLink = Boolean(type === 'link' || props.href);

    const appearanceLink = () => {
        if (appearance === 'navbar' || appearance === 'dropdown') {
            return 'menu';
        }
        return OAppearanceLink.find((item) => item === appearance);
    };

    const appearanceButton = () => {
        return OAppearanceButton.find((item) => item === appearance);
    };

    const typeButton  = type === 'link' ? 'button' : type;



    return isLink
        ? <Link
            icon={icon}
            weight={weight}
            context={context}
            className={props.className}
            iconColor={iconColor}
            appearance={appearanceLink()}
            iconPosition={iconPosition}
            notificationCounter={notificationCounter}
        >
            {children}
        </Link>
        : <Button
            icon={icon}
            type={typeButton}
            weight={weight}
            context={context}
            onClick={onClick}
            selected={selected}
            className={props.className}
            iconColor={iconColor}
            aria-label={`${context}`}
            appearance={appearanceButton()}
            iconPosition={iconPosition}
            notificationCounter={notificationCounter}
        >
            {children}
        </Button>;
};