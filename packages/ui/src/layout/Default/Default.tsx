import React, { useState } from 'react';

import { User } from '@geek/business/auth';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import type { Menu } from '../interface';

import './Default.scss';
import { Alert } from '../../components';

interface DefaultProps {
    user?: User;
    logo?: string;
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

                    <div style={{ display: 'flex', marginTop: '2rem', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <Alert 
                                type="info"
                                link={{ text: 'info click', clickAction: () => {} }}
                                onClose={() => {}}
                                hasCloseButton>
                                info
                            </Alert>
                        </div>
                        <div>
                            <Alert
                                type="lamp"
                                link={{ text: 'lamp click', clickAction: () => {} }}
                                onClose={() => {}}
                                hasCloseButton>
                                lamp
                            </Alert>
                        </div>
                        <div>
                            <Alert
                                type="error"
                                link={{ text: 'error click', clickAction: () => {} }}
                                onClose={() => {}}
                                hasCloseButton>
                                error
                            </Alert>
                        </div>
                        <div>
                            <Alert
                                type="warning"
                                link={{ text: 'warning click', clickAction: () => {} }}
                                onClose={() => {}}
                                hasCloseButton>
                            warning
                            </Alert>
                        </div>
                        <div>
                            <Alert
                                type="success"
                                link={{ text: 'success click', clickAction: () => {} }}
                                onClose={() => {}}
                                hasCloseButton>
                                success
                            </Alert>
                        </div>
                    </div>

                </div>
            </main>
        </Fade>
    );
}