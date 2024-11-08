import React from 'react';

import { CiCalendar, CiHeart, CiPhone, CiUser, CiWarning } from 'react-icons/ci';
import { FaFacebook, FaGoogle, FaHamburger, FaRegLightbulb } from 'react-icons/fa';
import { IoClose, IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineInfo, MdOutlineKeyboardArrowRight, MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaReact } from 'react-icons/fa6';
import { GiConfirmed } from 'react-icons/gi';
import { IoMdExit } from 'react-icons/io';
import { VscError } from 'react-icons/vsc';

import type { TColors, TIcon } from '../../interfaces';

export function getIcon(icon: TIcon, size?: string | number, color?: TColors) {

    switch (icon) {
        case 'user':
            return <CiUser size={size || '1em'} color={color}/>;
        case 'lamp':
            return <FaRegLightbulb size={size || '1em'} color={color}/>;
        case 'info':
            return <MdOutlineInfo size={size || '1em'} color={color}/>;
        case 'like':
            return <CiHeart size={size || '1em'} color={color}/>;
        case 'exit':
            return <IoMdExit size={size || '1em'} color={color}/>;
        case 'close':
            return <IoClose size={size || '1em'} color={color}/>;
        case 'error':
            return <VscError size={size || '1em'} color={color}/>;
        case 'phone':
            return <CiPhone size={size || '1em'} color={color}/>;
        case 'google':
            return <FaGoogle size={size || '1em'} color={color}/>;
        case 'confirm':
            return <GiConfirmed size={size || '1em'} color={color}/>;
        case 'warning':
            return <CiWarning size={size || '1em'} color={color}/>;
        case 'facebook':
            return <FaFacebook size={size || '1em'} color={color}/>;
        case 'calendar':
            return <CiCalendar size={size || '1em'} color={color}/>;
        case 'document':
            return <IoDocumentTextOutline size={size || '1em'} color={color}/>;
        case 'dashboard':
            return <MdOutlineSpaceDashboard size={size || '1em'} color={color}/>;
        case 'hamburger':
            return <FaHamburger size={size || '1em'} color={color}/>;
        case 'arrow-right':
            return <MdOutlineKeyboardArrowRight size={size || '1em'} color={color}/>;
        case 'react':
        default:
            return <FaReact size={size || '1em'} color={color} />;
    }
}