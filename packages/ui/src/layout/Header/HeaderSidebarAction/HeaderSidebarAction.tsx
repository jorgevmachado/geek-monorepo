import React, { useState } from 'react';

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import { GAction, GDropdown, GIcon } from '../../../components';
import { Navbar } from '../../interface';

import './HeaderSidebarAction.scss';

interface DropdownProps {
    label: string;
    children: React.ReactNode;
}

function Dropdown({ label, children }: DropdownProps) {
    const [isDropdownOpen, setIsMenuOpen] = useState(false);
    const icon = isDropdownOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;

    const handleOpenDropdown = () => { setIsMenuOpen(!isDropdownOpen); };

    return (
        <>
            <div className="header-sidebar__dropdown--container" onClick={handleOpenDropdown}>
                {label}
                <GIcon icon={icon} color="primary-100"/>
            </div>
            <ul className="header-sidebar__dropdown--container-content">
                { isDropdownOpen && children }
            </ul>
        </>

    );
}


interface HeaderSidebarActionProps {
    icon?: React.ReactNode;
    path?: string;
    type?: 'button' | 'dropdown';
    label: string;
    items?: Array<Navbar>;
    counter?: number;
    onRedirect?: () => void;
}

export default function HeaderSidebarAction({
                                                icon,
                                                type = 'button',
                                                label,
                                                items,
                                                counter,
                                                onRedirect
                                            }: HeaderSidebarActionProps) {
    return (
        <li className={`header-sidebar__${type}`}>
            {
                type !== 'button'
                    ? (
                        <>
                            <Dropdown label={label}>
                                {
                                    items?.map((item) => (
                                        <GAction
                                            key={item.key}
                                            context="primary"
                                            onClick={item.onRedirect}
                                            appearance="sidebar"
                                            iconPosition="left">
                                            {item.label}
                                        </GAction>
                                    ))
                                }
                            </Dropdown>
                            <GDropdown label={label} type="button" context="primary" appearance="sidebar">
                                {
                                    items?.map((item) => (
                                        <GAction
                                            key={item.key}
                                            context="primary"
                                            onClick={item.onRedirect}
                                            appearance="sidebar"
                                            iconPosition="left">
                                            {item.label}
                                        </GAction>
                                    ))
                                }
                            </GDropdown>
                        </>
                    )
                    : (
                        <GAction
                            icon={icon && (<GIcon className="header-sidebar__button--link-icon" icon={icon}/>)}
                            context="primary"
                            onClick={onRedirect}
                            appearance="sidebar"
                            iconPosition="left"
                            notificationCounter={counter}>
                        {label}
                        </GAction>
                    )
            }

        </li>
    );
}
