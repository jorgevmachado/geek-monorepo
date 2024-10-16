import React, { HTMLAttributes } from 'react';

import './GIcon.scss';
import { TColors } from '../../interfaces';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    readonly icon: React.ReactNode;
    readonly color?: TColors;
}

export default function GIcon({ icon, color, ...props }: IconProps) {
    const classList = `g-icon ${color ? `g-u-color-${color}` : ''} ${props.className ? props.className : ''}`;
    return (
        <span {...props} className={classList}>{icon}</span>
    );
}