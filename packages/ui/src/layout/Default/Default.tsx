import React, { useState } from 'react';

import { IUser } from '@geek/business';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import type { Menu } from '../interface';

import './Default.scss';

interface DefaultProps {
    user?: IUser;
    logo: string;
    menu?: Array<Menu>;
    children: React.ReactNode;
    onLogout: () => void;
}

export default function Default({ user, logo, menu, children, onLogout }: DefaultProps) {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;

    return (
        <Fade>
            <Header
                logo={logo}
                navbar={navbar}
                handleToggleMenu={handleToggleMenu}/>
            <main className="main-container">
                <Sidebar
                    user={user}
                    menu={menu}
                    onLogout={onLogout}
                    showMobileMenu={showMobileMenu}
                    handleToggleMenu={handleToggleMenu}/>
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    );
}