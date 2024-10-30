import React from 'react';

import { CiCalendar, CiHeart, CiPhone, CiUser } from 'react-icons/ci';
import { FaHamburger } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

import type { TColors, TIcon } from '../../interfaces';



export function getIcon(icon: TIcon, size?: string | number, color?: TColors) {

    switch (icon) {
        case 'user':
            return <CiUser size={size || '1em'} color={color}/>;
        case 'like':
            return <CiHeart size={size || '1em'} color={color}/>;
        case 'exit':
            return <IoMdExit size={size || '1em'} color={color}/>;
        case 'phone':
            return <CiPhone size={size || '1em'} color={color}/>;
        case 'calendar':
            return <CiCalendar size={size || '1em'} color={color}/>;
        case 'document':
            return <IoDocumentTextOutline size={size || '1em'} color={color}/>;
        case 'dashboard':
            return <MdOutlineSpaceDashboard size={size || '1em'} color={color}/>;
        case 'hamburger':
            return <FaHamburger size={size || '1em'} color={color}/>;
        case 'react':
        default:
            return <FaReact size={size || '1em'} color={color} />;
    }
}