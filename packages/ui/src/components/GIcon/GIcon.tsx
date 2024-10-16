import React from 'react';

import type { TColors } from '../../interfaces';

import { TIcon } from './interface';
import { getIcon } from './options';

import './GIcon.scss';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    readonly icon: React.ReactElement | TIcon;
    readonly size?: string | number;
    readonly color?: TColors;
}

export default function GIcon({ icon, size, color, ...props }: IconProps) {
    const classList = `g-icon ${color ? `g-u-color-${color}` : ''} ${props.className ? props.className : ''}`;
    const currentIcon =  typeof icon === 'string' ? getIcon(icon, size, color) : icon;

    return (
        <span {...props} className={classList}>{currentIcon}</span>
    );
}