import React from 'react';

import { joinClass } from '../../utils';

import { LinkProps } from './interface';

import type { TColors, TIcon, TIconPosition } from '../../interfaces';

import Icon from '../Icon';

import './Link.scss';

interface ContentProps {
    icon?: React.ReactNode | TIcon;
    children?: React.ReactNode;
    iconColor?: TColors;
    className?: string;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationCounter?: number;
}

function Content(contentProps: ContentProps) {
    const childrenClassName = joinClass([
        `${contentProps.className}-children`,
        `${contentProps.notificationCounter ? `${contentProps.className}-children__notification` : ''}`
    ]);

    const childrenIconClassName = joinClass([
        `${contentProps.className}-icon__position--${contentProps.iconPosition} g-u-color-${contentProps.iconColor}`,
        `${contentProps.iconClassName}`
    ]);
    return (
        <>
            {contentProps.icon && contentProps.iconPosition === 'left' && (
                <Icon icon={contentProps.icon} className={childrenIconClassName} />
            )}
            <div className={childrenClassName}>
                <div>{contentProps.children}</div>
                { contentProps.notificationCounter && (
                    <div className={`${contentProps.className}--children__notification--counter`}>
                        {contentProps.notificationCounter > 9 ? '9+' : contentProps.notificationCounter}
                    </div>
                )}
            </div>
            {contentProps.icon && contentProps.iconPosition === 'right' && (
                <Icon icon={contentProps.icon} className={childrenIconClassName} />
            )}
        </>
    );
}

export default function Link({
    icon,
    size = 'regular',
    weight = 'regular',
    context = 'neutral',
    children,
    iconColor,
    appearance,
    iconPosition = 'left',
    iconClassName,
    notificationCounter,
    ...props
}: LinkProps) {
    const rootClassName = `link__context--${context}`;
    const classNameList = joinClass([
        'link',
        rootClassName,
        `${iconPosition ? `${rootClassName}-icon--${iconPosition}` : ''}`,
        `${rootClassName}-size__${size}`,
        `${rootClassName}-weight__${weight}`,
        `${rootClassName}-appearance__${appearance}`,
        `${props.className}`
    ]);
    return (
        <a{...props} className={classNameList}>
            <Content
                icon={icon}
                iconColor={iconColor}
                className={rootClassName}
                iconPosition={iconPosition}
                iconClassName={iconClassName}
                notificationCounter={notificationCounter}>
                {children}
            </Content>
        </a>
    );
}