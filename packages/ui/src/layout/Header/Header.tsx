import React, { useState } from 'react';

import { FaHamburger } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';

import GAction from '../../components/GAction';
import GDropdown from '../../components/GDropdown';
import GIcon from '../../components/GIcon';
import GImage from '../../components/GImage';

import { NavSidebar, Navbar, User } from '../interface';

import GroupSidebar from './GroupSidebar';
import HeaderSidebarAction from './HeaderSidebarAction';
import Profile from './Profile';

import './Header.scss';


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

    const groupProfile = sidebar?.find((item) => item.key === 'profile');

    const profileSidebar = groupProfile?.items.find((item) => item.key === 'profile');

    const profileMenu: NavSidebar['items'][number] = !profileSidebar
        ? {
            key: 'profile',
            path: '/meus-dados',
            label: 'Meus dados',
            onRedirect: () => {
                window.open('/meus-dados', '_self', 'noopener');
            }
        }
        : profileSidebar;

    const filteredSidebar = sidebar?.filter((item) => item.key !== 'profile');

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
            <div className={`header-container__sidebar ${showMobileMenu ? 'header-container__sidebar--show' : ''}`}>
                <div className="header-container__sidebar--content">
                    <Profile user={user} profileMenu={profileMenu}>
                        <header className="header-container__sidebar--content-header">
                            <div className="header-container__sidebar--content-header__close--icon">
                                <GIcon onClick={handleToggleMenu} icon={<IoClose size={30}/>}/>
                            </div>
                        </header>
                    </Profile>
                    {
                        filteredSidebar?.map((item) => (
                            <GroupSidebar key={item.key} group={item}/>
                        ))
                    }
                    <HeaderSidebarAction icon={<IoMdExit/>} label="Sair" onRedirect={onLogout}/>

                    <hr className="header-container__sidebar--content-divider"/>

                    <ul className="header-container__sidebar--content-navbar">
                        {
                            navbar?.map((item) => (
                                <HeaderSidebarAction
                                    key={item.key}
                                    type={item.type}
                                    label={item.label}
                                    items={item.items}
                                    onRedirect={item?.onRedirect}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}