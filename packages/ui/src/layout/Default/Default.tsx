import React from 'react';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import type { NavSidebar, Navbar, User } from '../interface';

import GAction from '../../components/GAction';
import { gActions } from '../../components/GAction/interface';

import './Default.scss';

interface DefaultProps {
    user: User;
    logo: string;
    navbar?: Array<Navbar>;
    sidebar?: Array<NavSidebar>;
    children: React.ReactNode;
    onLogout: () => void;
}
export default function Default({ user, logo, navbar, sidebar, children, onLogout }: DefaultProps ) {

    return (
        <Fade>
            <Header user={user} logo={logo} navbar={navbar} sidebar={sidebar} onLogout={onLogout} />
            <main className="main-container">
                <Sidebar sidebar={sidebar} />
                <div className="main-content">
                    {children}
                    <h1>NEW</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        {
                            gActions({ type: 'link', appearance: 'dropdown' })
                                ?.map((item, index) => (
                                    <GAction
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
                                    </GAction>
                                ))
                        }
                    </div>
                </div>
            </main>
        </Fade>
    );
}