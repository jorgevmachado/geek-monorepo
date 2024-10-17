import React, { useState } from 'react';

import { FaHamburger } from 'react-icons/fa';
import HeaderDropdown from './HeaderDropdown';
import HeaderSidebar from './HeaderSidebar';

import './Header.scss';
import { NavSidebar, Navbar, User } from '../interface';
import GAction from '../../components/GAction';
import GImage from '../../components/GImage';


interface HeaderProps {
    user: User;
    logo: string;
    navbar?: Array<Navbar>;
    sidebar?: Array<NavSidebar>;
    onLogout: () => void;
}

export default function Header({ user, logo, navbar, sidebar, onLogout }: HeaderProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => { setShowMobileMenu(!showMobileMenu); };

    return (
        <header className="header-container">
            <div className="header-container__brand">
                <GAction
                    icon={<FaHamburger/>}
                    type="button"
                    onClick={handleToggleMenu}
                    context="primary"
                    className="header-container__brand--button"
                    aria-label="sidebar"
                    appearance="iconButton"
                />
                <div className="header-container__brand--logo">
                    <GImage src={logo} alt="Logo" title="Logo" />
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {navbar?.map((item) => (
                        <li className={`header-container__nav--list-item ${item.type === 'dropdown' ? 'header-container__nav--list-dropdown' : ''}`} key={item.key}>
                            {item.type === 'button' ? (
                                <GAction type="link" context="primary" appearance="navbar" onClick={item?.onRedirect}>
                                    {item.label}
                                </GAction>
                            ) : (
                                <HeaderDropdown label={item.label}>
                                    {item?.items?.map((subItem) => (
                                        <GAction
                                            key={subItem.key}
                                            type="link"
                                            context="primary"
                                            onClick={subItem?.onRedirect}
                                            appearance="dropdown">
                                            {subItem.label}
                                        </GAction>

                                    ))}
                                </HeaderDropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <HeaderSidebar
                user={user}
                isOpen={showMobileMenu}
                navbar={navbar}
                sidebar={sidebar}
                onLogout={onLogout}
                onToggleMenu={handleToggleMenu}/>
        </header>
    );
}