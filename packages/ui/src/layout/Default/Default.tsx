import React, { useState } from 'react';

import { IUser } from '@geek/business';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import Dropdown, { GenerateDropdowns } from '../../components/Dropdown';
import Button from '../../components/Button';

import type { Menu } from '../interface';

import { TColors } from '../../interfaces';


import './Default.scss';

function Dropdowns() {
    return GenerateDropdowns({}).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <div style={{ margin: '0 0 12rem 0 ' }}>
                            <Dropdown
                                key={index}
                                context={item.context}
                                appearance={item.appearance}>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 1
                                </Button>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 2
                                </Button>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 3
                                </Button>
                            </Dropdown>
                        </div>
                    ))
                }
            </div>
        </div>
    ));
}

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