import React from 'react';

import Fade from '../../animations/fade';
import GButton from '../../components/GButton';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './Default.scss';

import type { NavSidebar, Navbar, User } from '../interface';


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
                    <div>
                        <h1>SIZES BUTTON</h1>
                        <br/>
                        <GButton size="small">
                            SMALL BUTTON
                        </GButton>
                        <br/>
                        <br/>
                        <GButton>
                            DEFAULT BUTTON
                        </GButton>
                        <br/>
                        <br/>
                        <GButton size="large">
                            LARGE BUTTON
                        </GButton>
                        <br/>
                        <br/>
                        <GButton aria-label="ops"></GButton>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h1>ICONS</h1>
                        <br/>
                        <GButton icon="react" iconPosition="left">
                            BUTTON with icon left
                        </GButton>
                        <br/>
                        <br/>
                        <GButton icon="react" iconPosition="right">
                            BUTTON with icon right
                        </GButton>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h1>ROUNDED AND FLUID</h1>
                        <br/>
                        <GButton rounded={true}>
                            BUTTON ROUNDED
                        </GButton>
                        <br/>
                        <br/>
                        <GButton fluid={true}>
                            BUTTON FLUID
                        </GButton>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h1>APPEARANCE</h1>
                        <br/>
                        <GButton appearance="select">
                            BUTTON APPEARANCE SELECT
                        </GButton>
                        <br/>
                        <br/>
                        <GButton appearance="outline">
                            BUTTON APPEARANCE OUTLINE
                        </GButton>
                        <br/>
                        <br/>
                        <GButton appearance="standard">
                            BUTTON APPEARANCE STANDARD
                        </GButton>
                        <br/>
                        <br/>
                        <GButton appearance="borderless">
                            BUTTON APPEARANCE BORDERLESS
                        </GButton>
                        <br/>
                        <br/>
                        <GButton appearance="iconButton">
                            BUTTON APPEARANCE ICONBUTTON
                        </GButton>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h1>CONTEXT</h1>
                        <br/>
                        <GButton context="link">
                            BUTTON CONTEXT LINK
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="info">
                            BUTTON CONTEXT INFO
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="error">
                            BUTTON CONTEXT ERROR
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="custom">
                            BUTTON CONTEXT CUSTOM
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="neutral">
                            BUTTON CONTEXT NEUTRAL
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="primary">
                            BUTTON CONTEXT PRIMARY
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="success">
                            BUTTON CONTEXT SUCCESS
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="secondary">
                            BUTTON CONTEXT SECONDARY
                        </GButton>
                        <br/>
                        <br/>
                        <GButton context="attention">
                            BUTTON CONTEXT ATTENTION
                        </GButton>
                        <br/>
                        <br/>
                    </div>

                </div>
            </main>
        </Fade>
    );
}