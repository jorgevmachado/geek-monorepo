import React from 'react';

import { TContext, TType } from '../../interfaces';

export type TAppearance =
    | 'menu'
    | 'sidebar'
    | 'outline'
    | 'standard'
    | 'borderless'
    | 'iconButton';

export interface GDropdownProps {
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