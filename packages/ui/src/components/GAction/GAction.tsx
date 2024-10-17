import React, { useEffect } from 'react';



import GIcon from '../../components/GIcon';

import type { TIcon, TIconPosition } from '@interfaces/icons';
import { TContext } from '@interfaces/colors';
import { TWeight } from '@interfaces/fonts';

import { TAppearance, TSize, TType } from './interface';

import './GAction.scss';

interface ContentProps {
    icon?: React.ReactNode | TIcon;
    children?: React.ReactNode;
    iconPosition?: TIconPosition;
}

function Content({ children, icon, iconPosition }: ContentProps) {
    return (
        <>
            {icon && iconPosition === 'left' && (
                <GIcon icon={icon} className={`g-action__button--icon-${iconPosition}__icon`} />
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <GIcon icon={icon} className={`g-action__button--icon-${iconPosition}__icon`} />
            )}
        </>
    );
}

interface GActionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    icon?: React.ReactNode | TIcon;    
    type?: TType;
    size?: TSize;
    fluid?: boolean;
    weight?: TWeight;
    rounded?: boolean;
    context?: TContext;
    selected?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    appearance?: TAppearance;
    underlined?: boolean;
    iconPosition?: TIconPosition;
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

    const classNameList = `
        ${principalClassName}
        ${principalClassName}--size-${size}
        ${principalClassName}--weight-${weight}
        ${iconPosition && hasLabel ? `${principalClassName}--icon-${iconPosition}` : ''}        
        ${fluid ? `${principalClassName}--fluid` : ''}
        ${rounded ? `${principalClassName}--rounded` : ''}
        ${principalClassName}--context-${context}
        ${selected ? `${principalClassName}--selected` : ''}                
        ${!hasLabel ? `${principalClassName}--no-label` : ''}
        ${!hasLabel ? `${principalClassName}--no-label-${appearance}` : ''}                
        ${principalClassName}--appearance-${appearance}
        ${principalClassName}--appearance-${appearance}__${context}
        ${props.className}
    `;

  return (
    <Element {...props} type={type} className={classNameList}>
        {
            !isAppearanceIconButton
                ? (
                    <Content icon={icon} iconPosition={iconPosition}>
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
