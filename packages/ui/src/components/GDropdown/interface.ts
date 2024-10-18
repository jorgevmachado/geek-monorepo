import React from 'react';

import { TContext, TType } from '../../interfaces';
import { TAppearance } from '../GAction/interface';

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

export const gDropDowns = ({
    type,
    label,
    isOpen,
    context = 'link',
    disabled,
    onChange,
    activator,
    appearance,
    onClickOutside,
}: GDropdownProps) =>  ([
    {
        type,
        label,
        isOpen,
        context,
        children: `${type}-link`,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context: 'info',
        children: `${type}-info`,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context: 'error',
        children: `${type}-error`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'custom',
        children: `${type}-custom`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'neutral',
        children: `${type}-neutral`,
        disabled,
        onChange,
        activator,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'success',
        children: `${type}-success`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'primary',
        children: `${type}-primary`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'secondary',
        children: `${type}-secondary`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
    {
        type,
        label,
        isOpen,
        context:'attention',
        children: `${type}-attention`,
        disabled,
        onChange,
        activator,
        appearance,
        onClickOutside,
    },
]) as Array<GDropdownProps>;