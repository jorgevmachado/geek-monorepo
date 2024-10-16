import React, { useEffect } from 'react';

import type { TAppearance, TContext, TSize, TType } from './interface';

import type { TIcon } from '../../interfaces/icons';

import GIcon from '../GIcon';

import './GButton.scss';

interface GButtonProps  extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode | TIcon;
    type?: TType
    size?: TSize;
    fluid?: boolean;
    rounded?: boolean;
    context?: TContext;
    selected?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    appearance?: TAppearance;
    iconPosition?: 'left' | 'right';
}

export default function GButton({
    icon,
    type = 'button',
    size = 'regular',
    fluid,
    rounded,
    context = 'primary',
    selected,
    children,
    disabled,
    appearance = 'standard',
    iconPosition = 'left',
    ...props
}: GButtonProps) {

    const hasLabel = Boolean(children);

    const isAppearanceIconButton = appearance === 'iconButton';

    useEffect(() => {
        if (!hasLabel && !props['aria-label']) {
            throw new Error(
                'You must define the aria-label if the button has no label'
            );
        }
    }, []);
    

    const classList = `
        g-button
        g-button__size--${size}
        ${iconPosition && hasLabel ? `g-button__icon--${iconPosition}` : ''}       
        ${fluid ? 'g-button__fluid' : ''}               
        g-button__context--${context}
        ${rounded ? 'g-button__rounded' : ''}       
        g-button__no-label--${appearance}
        ${selected ? 'g-button__selected' : ''}       
        ${!hasLabel ? 'g-button__no-label' : ''}       
        g-button__appearance--${appearance}                                                        
        ${props.className}
    `;

  return (
    <button {...props} type={type} disabled={disabled} className={classList}>
        {icon && iconPosition === 'left' && (
            <GIcon icon={icon} className={`g-button__icon--${iconPosition}-icon`} />
        )}
        {!isAppearanceIconButton ? children : <GIcon icon={icon || 'react'}/>}
        {icon && iconPosition === 'right' && (
            <GIcon icon={icon} className={`g-button__icon--${iconPosition}-icon`} />
        )}
    </button>
  );
};
