import React, { useEffect } from 'react';

import type { TIcon, TIconPosition } from '../../interfaces/icons';
import { TColors } from '../../interfaces/colors';
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
}

function Content({ icon, children, iconColor, className, iconPosition }: ContentProps) {
    return (
        <>
            {icon && iconPosition === 'left' && (
                <GIcon icon={icon} className={`${className}--icon-${iconPosition}__icon g-u-color-${iconColor}`} />
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <GIcon icon={icon} className={`${className}--icon-${iconPosition}__icon g-u-color-${iconColor}`} />
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

    const principalClassName = `g-action__${isLink ? 'link' : 'button'}`;

    const classNameList = joinClass([
        principalClassName,
        `${principalClassName}--size-${size}`,
        `${principalClassName}--weight-${weight}`,
        `${iconPosition && hasLabel ? `${principalClassName}--icon-${iconPosition}` : ''}`,
        `${fluid ? `${principalClassName}--fluid` : ''}`,
        `${rounded ? `${principalClassName}--rounded` : ''}`,
        `${principalClassName}--context-${context}`,
        `${selected ? `${principalClassName}--selected` : ''}`,
        `${!hasLabel ? `${principalClassName}--no-label` : ''}`,
        `${!hasLabel ? `${principalClassName}--no-label-${appearance}` : ''}`,
        `${principalClassName}--appearance-${appearance}`,
        `${principalClassName}--appearance-${appearance}__${context}`,
        `${props.className}`
    ]);

  return (
    <Element {...props} type={type} className={classNameList}>
        {
            !isAppearanceIconButton
                ? (
                    <Content icon={icon}
                             iconColor={iconColor}
                             className={principalClassName}
                             iconPosition={iconPosition}>
                        {children}
                    </Content>
                )
                : (
                    <GIcon icon={icon || 'react'}/>
                )
        }
    </Element>
  );
};
