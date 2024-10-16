import React from 'react';

import type { TColors, TIcon } from '../../interfaces';
import { joinClass } from '../../utils';

import { getIcon } from './options';

import './GIcon.scss';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    readonly icon: React.ReactNode | TIcon;
    readonly size?: string | number;
    readonly color?: TColors;
}

export default function GIcon({ icon, size, color, ...props }: IconProps) {
    const classList = joinClass([
        'g-icon',
        `${color ? `g-u-color-${color}` : ''}`,
        `${props.className ? props.className : ''}`
    ]);
    const currentIcon =  typeof icon === 'string' ? getIcon(icon as TIcon, size, color) : icon;

    return (
        <span {...props} className={classList}>{currentIcon}</span>
    );
}