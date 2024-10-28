import React, { useEffect, useState } from 'react';

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import { TColors } from '../../interfaces';

import Button from '../Button';
import Link from '../Link';

import { GDropdownProps } from './interface';

import './GDropdown.scss';

export default function GDropdown( {
                                       type = 'button',
                                       label,
                                       isOpen,
                                       context = 'neutral',
                                       disabled,
                                       onChange,
                                       children,
                                       activator,
                                       appearance,
                                       onClickOutside
                                   }: GDropdownProps ) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const icon = isDropdownOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;
    const rootClassName = 'g-dropdown';
    const principalClassName = `${rootClassName}__context--${context}-appearance__${appearance}`;

    useEffect(() => {
        if (isOpen !== undefined) {
            setIsDropdownOpen(isOpen);
        }
    }, [isOpen]);

    const handleClick = () => {
        if (disabled) {
            return;
        }

        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }

        if (onChange) {
            onChange(!isDropdownOpen);
        }
    };

    const handleIsOpen = () => {
        if (isOpen !== undefined) {
            return isOpen;
        }
        return isDropdownOpen;
    };

    const handleOpenDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    
    return (
        <div className={`${rootClassName} ${principalClassName}`}>
            <div className={`${principalClassName}--trigger`} onClick={handleClick}>
                {
                    !activator ? (
                        <div className={`${principalClassName}--trigger-activator__type--${type}`}>
                            {
                                type === 'button'
                                    ? <Button
                                        icon={icon}
                                        type={type}
                                        focus={false}
                                        onClick={handleOpenDropdown}
                                        context={context}
                                        iconColor={`${context}-100` as TColors}
                                        iconPosition="right">
                                        {label}
                                    </Button>
                                    : <Link
                                        icon={icon}
                                        onClick={handleOpenDropdown}
                                        context={context}
                                        iconColor={`${context}-100` as TColors}
                                        appearance="menu"
                                        iconPosition="right">
                                        {label}
                                    </Link>
                            }

                        </div>
                    ) : activator
                }
            </div>
            {handleIsOpen() && (
                <div className={`${principalClassName}--content`} tabIndex={-1}>
                    {children}
                </div>
            )}
        </div>
    );
};
