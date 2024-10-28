import React from 'react';

import type { TContext, TIcon, TIconPosition, TSize, TWeight } from '../../interfaces';

export type TAppearance =
    | 'menu'
    | 'standard';

export const OAppearance: Array<TAppearance> = ['menu', 'standard'];

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode | TIcon;
    size?: TSize;
    weight?: TWeight;
    context?: TContext;
    children: React.ReactNode;
    appearance?: TAppearance;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationCounter?: number;
} 