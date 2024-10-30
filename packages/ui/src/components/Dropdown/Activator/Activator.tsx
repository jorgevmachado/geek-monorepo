import React from 'react';

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import type { TColors } from '../../../interfaces';

import Button from '../../Button';
import Link from '../../Link';

import { ActivatorProps } from './interface';

export default function Activator(activatorProps: ActivatorProps) {
    const icon = activatorProps.isOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;
    return (
        <div className={activatorProps.className}>
            {
                activatorProps.type === 'button' ? (
                    <Button
                        icon={icon}
                        type={activatorProps.type}
                        onClick={activatorProps.onClick}
                        context={activatorProps.context}
                        iconColor={`${activatorProps.context}-100` as TColors}
                        iconPosition="right">
                        { activatorProps.label }
                    </Button>
                ) : (
                    <Link 
                        icon={icon}
                        onClick={activatorProps.onClick}
                        context={activatorProps.context}
                        iconColor={`${activatorProps.context}-100` as TColors}
                        appearance="menu"
                        iconPosition="right">
                        { activatorProps.label }
                    </Link>
                )
            }
        </div>
    );
}