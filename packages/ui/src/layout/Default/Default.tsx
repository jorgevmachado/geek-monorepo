import React, { useState } from 'react';

import { IUser } from '@geek/business';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import Button, { GenerateButtons } from '../../components/Button';
import Dropdown, { GenerateDropdowns } from '../../components/Dropdown';
import Link, { GenerateLinks } from '../../components/Link';

import type { Menu } from '../interface';

import { TColors } from '../../interfaces';

import './Default.scss';

function Buttons() {
    return GenerateButtons({ icon: 'react', iconPosition: 'left' }).map((group) => (
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