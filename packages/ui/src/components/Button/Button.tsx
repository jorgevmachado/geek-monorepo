import React, { useEffect } from 'react';

import type { TColors, TIcon, TIconPosition } from '../../interfaces';
import { joinClass } from '../../utils';

import Icon from '../Icon';

import type { ButtonProps } from './interface';

import './Button.scss';

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
                    <div className={`${contentProps.className}-children__notification--counter`}>
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

export default function Button({
    icon,
    size = 'regular',
    fluid,
    focus = false,
    weight = 'regular',
    rounded,
    context = 'neutral',
    selected,
    children,
    disabled,
    iconColor,
    appearance,
    iconPosition = 'left',
    iconClassName,
    notificationCounter,
    ...props
}: ButtonProps) {

    const hasLabel = Boolean(children);

    const isAppearanceIconButton = appearance === 'iconButton';

    useEffect(() => {
        if (!hasLabel && !props['aria-label']) {
            throw new Error(
                'You must define the aria-label if the button has no label'
            );
        }
    }, []);

    const rootClassName = `button__context--${context}`;

    const classNameList = joinClass([
        'button',
        rootClassName,
        `${iconPosition && hasLabel ? `${rootClassName}-icon--${iconPosition}` : ''}`,
        `${rootClassName}-size__${size}`,
        `${focus ? `${rootClassName}-focus` : ''}`,
        `${fluid ? `${rootClassName}-fluid` : ''}`,
        `${rootClassName}-weight__${weight}`,
        `${rounded ? `${rootClassName}-rounded` : ''}`,
        `${!hasLabel ? `${rootClassName}-no-label` : ''}`,
        `${selected ? `${rootClassName}-selected` : ''}`,
        `${rootClassName}-appearance--${appearance}`,
        `${props.className}`
    ]);
    return (
        <button {...props} disabled={disabled} className={classNameList}>
            {
                !isAppearanceIconButton ? <Content
                                            icon={icon}
                                            iconColor={iconColor}
                                            className={rootClassName}
                                            iconPosition={iconPosition}
                                            iconClassName={iconClassName}
                                            notificationCounter={notificationCounter}>
                        {children}
                </Content>
                    : <Icon icon={icon || 'react'} className={iconClassName}/>
            }
        </button>
    );
}