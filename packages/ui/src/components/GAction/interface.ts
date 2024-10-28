import React from 'react';

import { OContext, TColors, TContext, type TIcon, type TIconPosition, TType, TWeight } from '../../interfaces';

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
    focus?: boolean;
    weight?: TWeight;
    rounded?: boolean;
    onClick?: () => void;
    context?: TContext;
    selected?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    iconColor?: TColors;
    appearance?: TAppearance;
    underlined?: boolean;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationCounter?: number;
}

export const gActions = (gActionProps: GActionProps) =>  {
    return OContext.map((item) => {
        gActionProps.context = item;
        gActionProps.children = `${gActionProps.type}-${item}`;
        return {
            ...gActionProps,
            'aria-label': `${gActionProps.type}-${item}`,
        };
    }) as Array<GActionProps>;
};