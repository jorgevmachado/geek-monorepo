import React from 'react';

import type { TColors, TIcon } from '../../interfaces';
import { joinClass } from '../../utils';

import { getIcon } from './options';

import './Icon.scss';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    readonly icon: React.ReactNode | TIcon;
    readonly size?: string | number;
    readonly color?: TColors;
}

export default function Icon({ icon, size, color, ...props }: IconProps) {
    const classList = joinClass([
        'icon',
        `${color ? `g-u-color-${color}` : ''}`,
        `${props.className ? props.className : ''}`
    ]);
    const currentIcon =  typeof icon === 'string' ? getIcon(icon as TIcon, size, color) : icon;

    return (
        <span {...props} className={classList}>{currentIcon}</span>
    );
}