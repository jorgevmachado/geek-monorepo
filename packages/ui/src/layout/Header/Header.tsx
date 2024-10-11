import { useState } from 'react';

import { FaHamburger } from 'react-icons/fa';

import GIcon from '../../components/GIcon';

import HeaderButton from './HeaderButton';
import HeaderDropdown from './HeaderDropdown';
import HeaderSidebar from './HeaderSidebar';

import './Header.scss';
import { NavSidebar, Navbar, User } from '../interface';

interface HeaderProps {
    user: User;
    logo: string;
    navbar?: Array<Navbar>;
    sidebar?: Array<NavSidebar>;
}

export default function Header({ user, logo, navbar, sidebar }: HeaderProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => { setShowMobileMenu(!showMobileMenu); };

    const profileSidebar = sidebar?.find((item) => item.key === 'profile');

    const profileMenu: NavSidebar = !profileSidebar
        ? {
            key: 'profile',
            label: 'Meus dados',
            path: '/meus-dados',
            onRedirect: () => {
                window.open('/meus-dados', '_self', 'noopener');
            }
        }
        : profileSidebar;

    return (
        <header className="header-container">
            <div className="header-container__brand">
                <button className="header-container__brand--button" onClick={handleToggleMenu} >
                    <GIcon icon={<FaHamburger/>} color="primary-100" />
                </button>
                <div className="header-container__brand--logo">
                    <img alt="Logo" src={logo} title="Logo" />
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {navbar?.map((item) => (
                        <li className={`header-container__nav--list-item ${item.type === 'dropdown' ? 'header-container__nav--list-dropdown' : ''}`} key={item.key}>
                            {item.type === 'button' ? (
                                <HeaderButton label={item.label} onRedirect={item?.onRedirect} />
                            ) : (
                                <HeaderDropdown label={item.label}>
                                    {item?.items?.map((subItem) => (
                                        <HeaderButton key={subItem.key} label={subItem.label} onRedirect={subItem?.onRedirect}/>
                                    ))}
                                </HeaderDropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <HeaderSidebar user={user} isOpen={showMobileMenu} profileMenu={profileMenu} onToggleMenu={handleToggleMenu}/>
        </header>
    );
}