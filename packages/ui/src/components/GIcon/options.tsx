import React from 'react';

import { FaHamburger } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';

import type { TColors } from '../../interfaces';
import { TIcon } from './interface';



export function getIcon(icon: TIcon, size?: string | number, color?: TColors) {

    switch (icon) {
        case 'hamburger':
            return <FaHamburger size={size || '1em'} color={color}/>;
        default:
            return <FaReact />;
    }
}