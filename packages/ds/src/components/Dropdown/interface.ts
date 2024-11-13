import React from 'react';

import { TContext, TType } from '../../interfaces';

export type TAppearance =
    | 'navbar'
    | 'sidebar'
    | 'standard';

export const OAppearance: Array<TAppearance> = [
    'navbar',
    'sidebar',
    'standard'
];

export interface DropdownProps {
    type?: TType;
    label?: string;
    isOpen?: boolean;
    context?: TContext;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    children?: React.ReactNode;
    activator?: React.ReactNode;
    appearance?: TAppearance;
    onClickOutside?: (value: boolean) => void;
}