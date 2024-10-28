import React, { useState } from 'react';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import type { Menu, User } from '../interface';

import './Default.scss';
import Button, { GenerateButtons } from '../../components/Button';
import Link, { GenerateLinks } from '../../components/Link';

function Buttons() {
    return GenerateButtons({}).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <Button
                            key={index}
                            icon={item.icon}
                            type={item.type}
                            weight={item.weight}
                            context={item.context}
                            onClick={item?.onClick}
                            selected={item.selected}
                            appearance={item.appearance}
                            aria-label={item['aria-label']}
                            iconPosition={item.iconPosition}
                            notificationCounter={item.notificationCounter}>
                            {item.children}
                        </Button>
                    ))
                }
            </div>
        </div>
    ));
}

function Links() {
    return GenerateLinks({}).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <Link
                            key={index}
                            icon={item.icon}
                            weight={item.weight}
                            context={item.context}
                            appearance={item.appearance}
                            iconPosition={item.iconPosition}
                            notificationCounter={item.notificationCounter}
                        >
                            {item.children}
                        </Link>
                    ))
                }
            </div>
        </div>
    ));
}

interface DefaultProps {
    user: User;
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

    return (
        <Fade>
            <Header
                user={user}
                logo={logo}
                menu={menu}
                onLogout={onLogout}
                showMobileMenu={showMobileMenu}
                handleToggleMenu={handleToggleMenu}/>
            <main className="main-container">
                <Sidebar
                    type="desktop"
                    user={user}
                    menu={menu}
                    onLogout={onLogout}
                    showMobileMenu={showMobileMenu}
                    handleToggleMenu={handleToggleMenu}
                />
                <div className="main-content">
                    {children}
                    <Links/>
                </div>
            </main>
        </Fade>
    );
}