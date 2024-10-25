import React from 'react';

import { FaHamburger } from 'react-icons/fa';

import GAction from '../../components/GAction';
import GDropdown from '../../components/GDropdown';
import GImage from '../../components/GImage';

import { type Menu, User } from '../interface';

import Sidebar from '../Sidebar';

import './Header.scss';

interface HeaderProps {
    user: User;
    logo: string;
    menu?: Array<Menu>;
    onLogout: () => void;
    showMobileMenu?: boolean;
    handleToggleMenu?: () => void;
}

export default function Header({ user, logo, menu, onLogout, showMobileMenu, handleToggleMenu }: HeaderProps) {

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;

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
                <div className="header-container__brand--logo" onClick={() => window.open('/', '_self', 'noopener')}>
                    <GImage src={logo} alt="Logo" title="Logo" />
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {navbar?.map((item) => (
                        <li
                            key={item.key}
                            className={`header-container__nav--list-item ${item.items?.length ? 'header-container__nav--list-dropdown' : ''}`}>
                            {!item.items?.length ? (
                                <GAction type="link" context="primary" appearance="navbar" onClick={item?.onRedirect}>
                                    {item.label}
                                </GAction>
                            ) : (
                                <GDropdown label={item.label} type="link" context="primary" appearance="navbar">
                                    {item?.items?.map((subItem) => (
                                        <GAction
                                            key={subItem.key}
                                            type="link"
                                            context="primary"
                                            iconColor="primary-100"
                                            onClick={subItem?.onRedirect}
                                            appearance="dropdown">
                                            {subItem.label}
                                        </GAction>
                                    ))}
                                </GDropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <Sidebar
                type="mobile"
                user={user}
                menu={menu}
                onLogout={onLogout}
                showMobileMenu={showMobileMenu}
                handleToggleMenu={handleToggleMenu}
            />
        </header>
    );
}