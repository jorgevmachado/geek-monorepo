import { HTMLAttributes } from 'react';

import './GIcon.scss';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    readonly icon: string | React.ReactNode;
    readonly color?: string;
}

export default function GIcon({ icon, color, ...props }: IconProps) {
    const classList = `g-icon ${color ? `g-u-color-${color}` : ''} ${props.className ? props.className : ''}`;
    return (
        <span {...props} className={classList}>{icon}</span>
    );
}