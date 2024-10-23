import React, { useEffect } from 'react';

import type { TIcon, TIconPosition } from '../../interfaces/icons';
import type { TColors } from '../../interfaces/colors';


import joinClass from '../../utils/joinClass';

import GIcon from '../../components/GIcon';

import { GActionProps } from './interface';

import './GAction.scss';

interface ContentProps {
    icon?: React.ReactNode | TIcon;
    children?: React.ReactNode;
    iconColor?: TColors;
    className?: string;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationCounter?: number;
}

function Content({ icon, children, iconColor, className, iconPosition, iconClassName, notificationCounter }: ContentProps) {
    const childrenClassName = joinClass([
        `${className}--children`,
        `${notificationCounter ? `${className}__children--notification` : ''}`
    ]);

    const childrenIconClassName = joinClass([
        `${className}__icon--${iconPosition}-icon g-u-color-${iconColor}`,
        `${iconClassName}`
    ]);

    return (
        <>
            {icon && iconPosition === 'left' && (
                <GIcon icon={icon} className={childrenIconClassName} />
            )}
            <div className={childrenClassName}>
                <div>{children}</div>
                { notificationCounter && (
                    <div className={`${className}__children--notification-counter`}>
                        {notificationCounter > 9 ? '9+' : notificationCounter}
                    </div>
                )}
            </div>
            {icon && iconPosition === 'right' && (
                <GIcon icon={icon} className={childrenIconClassName} />
            )}
        </>
    );
}


function elementTypeOf(isLink?: boolean): React.ElementType {
    return (isLink ? 'a' : 'button') as React.ElementType;

}

export default function GAction({
                                     icon,
                                     type = 'button',
                                     size = 'regular',
                                     fluid,
                                     focus = true,
                                     weight = 'regular',
                                     rounded,
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

    const hasLabel = Boolean(children);

    const isAppearanceIconButton = appearance === 'iconButton';

    const Element = elementTypeOf(isLink);

    useEffect(() => {
        if ( type !== 'link' && !hasLabel && !props['aria-label']) {
            throw new Error(
                'You must define the aria-label if the button has no label'
            );
        }
    }, []);

    const rootClassName = `g-action__${isLink ? 'link' : 'button'}`;
    const principalClassName = `${rootClassName}--context-${context}`;

    const classNameList = joinClass([
        rootClassName,
        principalClassName,
        `${principalClassName}__size--${size}`,
        `${principalClassName}__weight--${weight}`,
        `${iconPosition && hasLabel ? `${principalClassName}__icon--${iconPosition}` : ''}`,
        `${fluid ? `${principalClassName}__fluid` : ''}`,
        `${rounded ? `${principalClassName}__rounded` : ''}`,
        `${selected ? `${principalClassName}__selected` : ''}`,
        `${principalClassName}__appearance--${appearance}`,
        `${!hasLabel ? `${principalClassName}__no-label` : ''}`,
        `${focus ? `${principalClassName}__focus` : ''}`,
        `${props.className}`
    ]);

    return (
        <Element {...props} type={type} disabled={disabled} className={classNameList}>
            {
                !isAppearanceIconButton
                    ? (
                        <Content icon={icon}
                                 iconColor={iconColor}
                                 className={principalClassName}
                                 iconPosition={iconPosition}
                                 iconClassName={iconClassName}
                                 notificationCounter={notificationCounter}>
                            {children}
                        </Content>
                    )
                    : (
                        <GIcon icon={icon || 'react'} className={iconClassName}/>
                    )
            }
        </Element>
    );
};
