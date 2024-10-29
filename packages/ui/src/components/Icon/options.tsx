import React from 'react';

import { FaHamburger } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';

import type { TColors, TIcon } from '../../interfaces';



export function getIcon(icon: TIcon, size?: string | number, color?: TColors) {

    switch (icon) {
        case 'hamburger':
            return <FaHamburger size={size || '1em'} color={color}/>;
        default:
            return <FaReact />;
    }
}