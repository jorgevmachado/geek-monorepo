import React from 'react';

import { TColors, TContext, TIcon, TIconPosition, TSize, TWeight } from '../../interfaces';

export type TAppearance =
    | 'sidebar'
    | 'outline'
    | 'standard'
    | 'borderless'
    | 'iconButton';

export const OAppearance: Array<TAppearance> = [
     'sidebar',
     'outline',
     'standard',
     'borderless',
     'iconButton'
];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode | TIcon;
    size?: TSize;
    fluid?: boolean;
    focus?: boolean;
    weight?: TWeight;
    rounded?: boolean;
    context?: TContext;
    selected?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    iconColor?: TColors;
    appearance?: TAppearance;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationCounter?: number;
}