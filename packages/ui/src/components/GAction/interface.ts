import React from 'react';

import { TColors, TContext, type TIcon, type TIconPosition, TType, TWeight } from '../../interfaces';

export type TSize = 'small' | 'regular' | 'large';

export const OSize: Array<TSize> = ['small' , 'regular' , 'large'];

export type TAppearance =
    | 'navbar'
    | 'select'
    | 'sidebar'
    | 'outline'
    | 'dropdown'
    | 'standard'
    | 'borderless'
    | 'iconButton';

export const OAppearance: Array<TAppearance> = [
    'navbar',
    'select',
    'sidebar',
    'outline',
    'dropdown',
    'standard',
    'borderless',
    'iconButton'
];

export interface GActionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
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
    iconColor?: TColors;
    appearance?: TAppearance;
    underlined?: boolean;
    iconPosition?: TIconPosition;
}

export const gActions = ({
    icon,
    type,
    size,
    fluid,
    weight,
    rounded,
    context = 'link',
    disabled,
    iconColor,
    appearance,
    underlined,
    iconPosition,
}: GActionProps) =>  ([
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context,
        children: `${type}-link`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context: 'info',
        children: `${type}-info`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context: 'error',
        children: `${type}-error`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'custom',
        children: `${type}-custom`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'neutral',
        children: `${type}-neutral`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'success',
        children: `${type}-success`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'primary',
        children: `${type}-primary`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'secondary',
        children: `${type}-secondary`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
    {
        icon,
        type,
        size,
        fluid,
        weight,
        rounded,
        context:'attention',
        children: `${type}-attention`,
        disabled,
        iconColor,
        appearance,
        underlined,
        iconPosition,
    },
]) as Array<GActionProps>;